import { Player, ControlBar, ForwardControl, ReplayControl, BigPlayButton } from 'video-react';
import '/node_modules/video-react/dist/video-react.css'; 

interface VideoPlayerApp {
    src: string
}

export const VideoPlayer = ({src}: VideoPlayerApp) => {
    return (
        <Player
            poster="/img/mediaBlock-1.webp"
            muted
            src={src}
        >
            <BigPlayButton position="center" />
            <ControlBar>
                <ReplayControl seconds={10} />
                <ForwardControl seconds={10} />
            </ControlBar>
        </Player>
    )
}
