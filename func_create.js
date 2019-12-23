function create ()
{

    this.input.keyboard.on('keyup-W', x => console.log('W pressed'));
    this.input.keyboard.on('keydown-W', fire, this);

    bullets = this.physics.add.group();
    en_bullets = this.physics.add.group();
    // устанавливаем тип бомб //////////////////////////////////////////////////////////////////////////////////////
    bombs = this.physics.add.group();
    // здесь мы создаем карту //////////////////////////////////////////////////////////////////////////////////
    this.add.image(512, 288, 'background');

    platforms = this.physics.add.staticGroup();
    grass = this.physics.add.staticGroup();

    platforms.create(512, 570, 'big_ground').setScale(1).refreshBody();

    // platforms.create(50, 140, 'ground');

    //нижняя стена ////////////////////////////////////////////////////////////////////////////////////////////////
    platforms.create(150, 540, 'ground');
    grass.create(150,  537, 'grass');
    platforms.create(150, 520, 'ground');
    grass.create(150,  517, 'grass');
    // rocks at first flour //////
    platforms.create(450, 540, 'ground');
    grass.create(450,  537, 'grass');

    // первая ступенька // первая половина экрана /////////////////////////////////////////////////////////////////
    platforms.create(50,  430, 'ground');
    grass.create(50,  427, 'grass');
    // second stairs
    platforms.create(250, 345, 'ground');
    grass.create(250,  342, 'grass');
    // there are first flour
    platforms.create(370, 345, 'ground');
    grass.create(370,  342, 'grass');
    platforms.create(490, 345, 'ground');
    grass.create(490,  342, 'grass');
    platforms.create(610, 345, 'ground');
    grass.create(610,  342, 'grass');
    platforms.create(730, 345, 'ground');
    grass.create(730,  342, 'grass');
    platforms.create(760, 345, 'ground');
    grass.create(760,  342, 'grass');
    platforms.create(230, 315, 'ground');
    grass.create(230,  342, 'grass');
    platforms.create(210, 285, 'ground');
    grass.create(210,  282, 'grass');
    // third stairs
    platforms.create(50,  270, 'ground');
    grass.create(50,  267, 'grass');
    // fourth stairs
    platforms.create(250, 200, 'ground');
    grass.create(250,  197, 'grass');
    // there are second flour
    platforms.create(370, 200, 'ground');
    grass.create(370,  342, 'grass');
    platforms.create(490, 200, 'ground');
    grass.create(370,  342, 'grass');
    platforms.create(610, 200, 'ground');
    grass.create(370,  342, 'grass');
    platforms.create(730, 200, 'ground');
    grass.create(370,  342, 'grass');
    platforms.create(760, 200, 'ground');
    grass.create(370,  342, 'grass');
    platforms.create(920, 160, 'ground');
    grass.create(370,  342, 'grass');
    platforms.create(890, 190, 'ground');
    grass.create(370,  342, 'grass');
    // mid per last flour
    platforms.create(10,  130, 'ground');
    grass.create(10,  127, 'grass');
    platforms.create(130, 130, 'ground');
    grass.create(130,  127, 'grass');
    platforms.create(250, 130, 'ground');
    grass.create(250,  127, 'grass');
    platforms.create(370, 130, 'ground');
    grass.create(370,  127, 'grass');
    platforms.create(490, 130, 'ground');
    grass.create(490,  127, 'grass');
    platforms.create(610, 130, 'ground');
    grass.create(610,  127, 'grass');
    // platforms.create(730, 130, 'ground');
    platforms.create(730, 130, 'ground');
    grass.create(730,  127, 'grass');
    //last stair
    //  platforms.create(50, 140, 'ground');
    //there are third big flour
    platforms.create(250, 60, 'ground');
    grass.create(250,  57, 'grass');
    platforms.create(370, 60, 'ground');
    grass.create(370,  57, 'grass');
    platforms.create(490, 60, 'ground');
    grass.create(490,  57, 'grass');
    platforms.create(610, 60, 'ground');
    grass.create(610,  57, 'grass');
    platforms.create(730, 60, 'ground');
    grass.create(730,  57, 'grass');
    // platforms.create(730, 30, 'ground');
    // second part of screen
    platforms.create(750, 520, 'ground');
    grass.create(750,  517, 'grass');
    platforms.create(960, 115, 'ground');
    grass.create(960,  112, 'grass');
    platforms.create(960, 265, 'ground');
    grass.create(960,  262, 'grass');
    platforms.create(960, 430, 'ground');
    grass.create(960,  427, 'grass');


    // create the enemies /////////////////////////////////////////////////////////////////////////////////////////
    enemies = this.physics.add.group();

    var enemy_1 = enemies.create(100, 170, 'enemy_1');

    enemy_1.setCollideWorldBounds(true);
    enemy_1.setBounce(1);
    enemy_1.setVelocity(Phaser.Math.Between(-200, 200), 20);


    //здесь мы прописываем движение игрока и анимацию этого движения ///////////////////////////////////////////////

    player = this.physics.add.sprite(10, 530, 'dude');


    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    moveKeys = this.input.keyboard.addKeys(
        {
            'left_A': Phaser.Input.Keyboard.KeyCodes.A,
            'right_D': Phaser.Input.Keyboard.KeyCodes.D,
        }
    );

    // тут будет вся анимация //////////////////////////////////////////////////////////////////////////////////////

    this.anims.create({
        key: 'fly',
        frames: [ { key: 'keel', frame: 0 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'kek',
        frames:  this.anims.generateFrameNumbers('keel', { start : 1, end: 4}),
        frameRate: 20

    });
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    // добавляем звезды /////////////////////////////////////////////////////////////////////////////////////////////
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    // устанавливаем протоколы столкновений ////////////////////////////////////////////////////////////////////////

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);

    this.physics.add.collider(enemies, platforms, enemyshoot, null, this);
    this.physics.add.collider(player, en_bullets, hitBomb, null, this);
    this.physics.add.collider(en_bullets, platforms, en_boom, null, this);
    this.physics.add.collider(bullets, enemies, enemyKill, null, this);
    this.physics.add.collider(bullets, platforms, boom, null, this);
    this.physics.add.overlap(player, stars, collectStar, null, this);
    this.physics.add.collider(player, bombs, hitBomb, null, this);
    this.physics.add.collider(bullets, bombs, bombKill, null, this);

}
