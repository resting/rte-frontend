import React from 'react'

const Media = (props) => {
    const entity = props.contentState.getEntity(
        props.block.getEntityAt(0),
    )

    const {src} = entity.getData()
    const type = entity.getType()

    let media
    if (type === 'image') {
        media = <Image src={src}/>
    }
    return media
}

const Image = (props) => {
    return <img src={props.src} style={styles.media}/>
}

const styles = {
    media: {
        maxWidth: '100%',
    },
}

export default Media
