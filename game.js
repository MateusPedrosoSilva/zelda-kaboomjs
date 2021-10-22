kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
});

loadRoot('https://i.imgur.com/');

loadSprite('link-going-left', '1Xq9biB.png');
loadSprite('link-going-left', 'yZIb8O2.png');
loadSprite('link-going-down', 'r377FIM.png');
loadSprite('link-going-up', 'UkV0we0.png');
loadSprite('left-wall', 'rfDoaa1.png');
loadSprite('top-wall', 'QA257Bj.png');
loadSprite('right-wall', 'SmHhgUn.png');
loadSprite('bottom-wall', 'vWJWmvb.png');
loadSprite('bottom-left-wall', 'awnTfNC.png');
loadSprite('bottom-right-wall', '84oyTFy.png');
loadSprite('top-left-wall', 'xlpUxIm.png');
loadSprite('top-right-wall', 'z0OmBd1.png');
loadSprite('top-door', 'U9nre4n.png');
loadSprite('left-door', 'okdJNls.png');
loadSprite('fire-pot', 'I7xSp7w.png');
loadSprite('lanterns', 'wiSiY09.png');
loadSprite('slicer', 'c6JFi5Z.png');
loadSprite('skeletor', 'Ei1VnX8.png');
loadSprite('kaboom', 'o9WizfI.png');
loadSprite('stairs', 'VghkL08.png');
loadSprite('bg', 'u4DVsx6.png');

scene('game', () => {
    layers(['bg', 'obj', 'ui'], 'obj');

    const map = [
        // For draw the grid
        'ycc)cc^ccw',
        'a        b',
        'a       *b',
        'a    (   b',
        '%        b',
        'a    (   b',
        'a   *    b',
        'a        b',
        'xdd)dd)ddz',
    ];

    const levelCfg = {
        width: 48,
        height: 48,
        'a': [sprite('left-wall'), solid()],
        'b': [sprite('right-wall'), solid()],
        'c': [sprite('top-wall'), solid()],
        'd': [sprite('bottom-wall'), solid()],
        'w': [sprite('top-right-wall'), solid()],
        'x': [sprite('bottom-left-wall'), solid()],
        'y': [sprite('top-left-wall'), solid()],
        'z': [sprite('bottom-right-wall'), solid()],
        '%': [sprite('left-door'), solid()],
        '^': [sprite('top-door'), solid()],
        '$': [sprite('stairs'), solid()],
        '*': [sprite('slicer'), solid()],
        '}': [sprite('skeletor'), solid()],
        ')': [sprite('lanterns'), solid()],
        '(': [sprite('fire-pot'), solid()],
    };

    addLevel(map, levelCfg);

    add([sprite('bg'), layer('bg')]);

    add([
        text('0'),
        pos(400, 450),
        layer('ui'),
        {
            value: 'test',
        },
    ]);
});

start('game');