import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: any;
      PlayerState: {
        PLAYING: number;
        ENDED: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
  }
}

const TARGET_VIDEO_ID = 'GtvS897PiyQ';
const PLAYLIST_ID = 'PLqPEdidU-O-s_Ye6kIQ_mZEzoET7Q31Fr';

export const AudioPlayer: React.FC = () => {
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [statusText, setStatusText] = useState('Ative o som pelo ícone de volume para ouvir a trilha.');
  const playerRef = useRef<any>(null);
  const userSilencedRef = useRef(false);

  const audible = playing && !muted;

  useEffect(() => {
    document.body.classList.toggle('playing', audible);
    if (audible) {
      setStatusText('A música acompanha sua visita.');
    } else {
      setStatusText('Ative o som pelo ícone de volume para ouvir a trilha.');
    }
  }, [audible]);

  useEffect(() => {
    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      try {
        playerRef.current = new window.YT.Player('ytplayer', {
          events: {
            onReady: () => {
              setReady(true);
              const p = playerRef.current;
              if (p) {
                p.setVolume?.(30);
                p.unMute?.();
                try {
                  p.loadVideoById?.(TARGET_VIDEO_ID);
                } catch (_) {}
                p.playVideo?.();
              }
            },
            onStateChange: (e: any) => {
              const p = playerRef.current;
              const isPlaying = e.data === window.YT?.PlayerState?.PLAYING;
              setPlaying(isPlaying);
              if (p && typeof p.isMuted === 'function') {
                setMuted(p.isMuted());
              }
              if (e.data === window.YT?.PlayerState?.ENDED && p) {
                p.loadVideoById?.(TARGET_VIDEO_ID);
                p.playVideo?.();
              }
            },
            onAutoplayBlocked: () => {
              setPlaying(false);
              setStatusText('O navegador aguarda um toque para liberar o som.');
            },
            onError: () => {
              setPlaying(false);
              setStatusText(
                window.location.protocol === 'file:'
                  ? 'O YouTube não conseguiu reproduzir neste arquivo local.'
                  : 'A trilha está indisponível no momento.'
              );
            },
          },
        });
      } catch (_) {}
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
      if (!existingScript) {
        const api = document.createElement('script');
        api.src = 'https://www.youtube.com/iframe_api';
        api.async = true;
        api.onerror = () => {
          setStatusText('Não foi possível carregar a trilha.');
        };
        document.head.appendChild(api);
      }
    }
  }, []);

  // Unlock audio on initial user gesture
  useEffect(() => {
    const unlockAudio = (event: Event) => {
      if (
        (event.target as HTMLElement)?.closest('#musicToggle') ||
        userSilencedRef.current ||
        !playerRef.current
      ) {
        return;
      }
      try {
        const p = playerRef.current;
        p.unMute?.();
        setMuted(false);
        p.playVideo?.();
      } catch (_) {}
    };

    document.addEventListener('pointerdown', unlockAudio, { passive: true });
    document.addEventListener('keydown', unlockAudio);

    return () => {
      document.removeEventListener('pointerdown', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
    };
  }, []);

  const handleToggleClick = () => {
    const player = playerRef.current;
    if (!ready || !player) {
      setStatusText('A trilha está carregando. Tente novamente em instantes.');
      return;
    }

    if (playing && !muted) {
      player.mute?.();
      setMuted(true);
      userSilencedRef.current = true;
    } else {
      player.unMute?.();
      setMuted(false);
      player.playVideo?.();
      userSilencedRef.current = false;
    }
  };

  return (
    <>
      <button
        className="music-float"
        id="musicToggle"
        aria-label={audible ? 'Silenciar trilha sonora' : 'Ativar trilha sonora'}
        aria-pressed={audible}
        title={audible ? 'Silenciar' : 'Ouvir trilha'}
        type="button"
        onClick={handleToggleClick}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M11 5L6 9H3v6h3l5 4z" />
          {audible ? (
            <path d="M15 8a6 6 0 010 8m3-11a10 10 0 010 14" />
          ) : (
            <path d="m16 9 5 6m0-6-5 6" />
          )}
        </svg>
      </button>

      <div className="audio-only" aria-hidden="true">
        <span id="musicStatus" hidden>
          {statusText}
        </span>
        <iframe
          id="ytplayer"
          tabIndex={-1}
          title="Trilha sonora do Musical AR"
          src={`https://www.youtube.com/embed/${TARGET_VIDEO_ID}?list=${PLAYLIST_ID}&index=2&enablejsapi=1&playsinline=1&autoplay=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      </div>
    </>
  );
};
