
import colors from 'utils/colors';

export default theme => {
    return {
        container: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100vw',
            height: 50,
            background: '#fff',
            color: '#000',

            '& section': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },

            '& aside': {
                display: 'flex',
                paddingLeft: 20,
                paddingRight: 32,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',

                '& p': {
                    margin: 0,
                    padding: 0,
                }
            }
        },

        bar: {
            width: '100vw',
            cursor: 'pointer',

            '&, & $playing, & $buffering': {
                position: 'fixed',
                left: 0,
                bottom: 50,
                height: 2,
            },

            '& $playing': {
                width: '100%',
                background: 'linear-gradient(to right,#62efab 5%,#f2ea7d 15%,#f2ea7d 25%,#ff8797 35%,#ff8797 45%,#e1a4f4 55%,#e1a4f4 65%,#82fff4 75%,#82fff4 85%,#62efab 95%)',
                backgroundSize: '200%',
                backgroundPosition: 0,
                zIndex: 1,
                transform: 'translate3d(-100%, 0, 0)',
                transition: 'transform .2s ease-out',
            },

            '& $playing:after': {
                content: 'attr(data-time)',
                position: 'absolute',
                right: 0,
                bottom: 2,
                display: 'inline-block',
                padding: '10px 6px',
                fontFamily: 'Roboto, Microsoft YaHei UI, Microsoft YaHei',
                fontSize: 12,
                color: '#fff',
                background: '#000',
                whiteSpace: 'nowrap',
            },

            '& $buffering': {
                width: '100%',
                background: colors.randomGradient(),
                backgroundPosition: 0,
                opacity: .2,
                transform: 'translate3d(-100%, 0, 0)',
                transition: 'transform .2s ease-out',
            },
        },

        playing: {},
        buffering: {},

        info: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',

            '& a': {
                display: 'inline-block',
                paddingBottom: 2,
                borderBottom: 'thin solid rgba(255, 255, 255, 0)',
                transition: '.2s',

                '&:hover': {
                    borderBottomColor: '#000',
                },

            }
        },

        title: {
            marginBottom: '3px !important',

            '& a': {
                paddingBottom: 1,
                maxWidth: 400,
                fontSize: 13,
                color: '#081600',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            }
        },

        author: {
            marginTop: 2,
            fontSize: 11,
            maxWidth: 400,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',

            '& a': {
                color: '#4a4a4a',

                '&:after': {
                    content: '"/"',
                    display: 'inline-block',
                    margin: '0 5px',
                },
            },

            '& a:last-child:after': {
                content: 'none',
            }
        },

        action: {
            '& i': {
                display: 'inline-block',
                height: 24,
                width: 24,
                lineHeight: '24px',
                marginRight: 16,
                fontSize: 16,
                color: '#4a4a4a',
                textAlign: 'center',
                cursor: 'pointer',
                transition: '.2s',
            },

            '& i:hover': {
                color: theme.controller.hoverColor,
            },

            '& i$liked': {
                color: colors.pallet.grape,
                textShadow: `0 0 24px ${colors.pallet.grape}`,
            }
        },

        highquality: {
            display: 'inline-block',
            padding: '2px 6px',
            marginRight: 30,
            letterSpacing: 1,
            textTransform: 'uppercase',
            fontFamily: 'Roboto',
            fontSize: 12,
            color: colors.pallet.dribbble,
            border: `thin solid ${colors.pallet.dribbble}`,
            textShadow: `0 0 24px ${colors.pallet.dribbble}`,
            transform: 'translateY(-3px)',
            zoom: .8,
        },

        liked: { },

        mode: {
            color: '#4a4a4a',
        },

        controls: {
            display: 'inline-block',
            marginLeft: 16,
            color: '#000',
        },

        toggle: {
            '& i': {
                color: '#9b9b9b',
            }
        },
    };
};
