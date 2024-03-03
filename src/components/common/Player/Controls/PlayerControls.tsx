import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { formatTime } from '@/components/common/Player/Controls/helpers';
import { IconButton } from '@/components/common/IconButton/IconButton';
import { UtilityIcon } from '@/services/api/getHeaderData';

import styles from './PlayerControls.module.scss';

interface PlayerControlsProps {
    videoRef: RefObject<HTMLVideoElement>;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({ videoRef }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused || videoRef.current.ended) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleTimeUpdate = useCallback(() => {
        if (videoRef.current && progressBarRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            progressBarRef.current.style.width = progress + '%';
            setCurrentTime(videoRef.current.currentTime);
        }
    }, [videoRef]);

    const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (videoRef.current && progressBarRef.current) {
            const clickX = e.clientX - progressBarRef.current.getBoundingClientRect().left;
            const progressPercentage = (clickX / progressBarRef.current.offsetWidth) * 100;
            const seekTime = (progressPercentage * videoRef.current.duration) / 100;
            videoRef.current.currentTime = seekTime;
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [handleTimeUpdate, videoRef]);

    return (
        <div className={styles.controlsContainer}>
            <div className={styles.controlsWrapper}>
                <IconButton
                    buttonId={'playPauseButton'}
                    onClick={togglePlayPause}
                    iconType={isPlaying ? UtilityIcon.PAUSE : UtilityIcon.PLAY}
                    className={styles.playPauseButton}
                />
                <div className={styles.progressBarWrapper}>
                    <div className={styles.progressBar} onClick={handleProgressBarClick} ref={progressBarRef} />
                </div>
                <div className={styles.timer}>{formatTime(currentTime)}</div>
            </div>
        </div>
    );
};
