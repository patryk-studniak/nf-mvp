'use client';
import { FC, useRef } from 'react';
import { PlayerControls } from '@/components/common/Player/Controls/PlayerControls';

import styles from './Player.module.scss';

export enum PlayerType {
    VIDEO_MP4 = 'video/mp4',
}

interface PlayerProps {
    videoUrl: string;
    videoType?: PlayerType;
}

export const Player: FC<PlayerProps> = ({ videoUrl, videoType = PlayerType.VIDEO_MP4 }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <>
            <div className={styles.videoWrapper}>
                <video
                    ref={videoRef}
                    className={styles.playerContainer}
                    loop
                    muted
                    autoPlay
                    src={videoUrl}
                    datatype={videoType}
                />
            </div>
            <PlayerControls videoRef={videoRef} />
        </>
    );
};
