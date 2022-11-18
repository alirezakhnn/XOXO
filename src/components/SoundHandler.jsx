import { useState } from 'react';
import { origin_music } from '../audios';
import Sound from 'react-sound';

const SoundHandler = () => (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <Sound
            url={origin_music}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFormPosition={300}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinisedPlaying={handleSongFinishedPlaying}
        />
    );
}

export default SoundHandler