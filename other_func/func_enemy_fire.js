function enemyshoot(enemy, platforms)
{

    var en_bullet;
    en_bullet = en_bullets.create(enemy.x - 5, enemy.y, 'fireball');
    en_bullet.setVelocityX(-500);
    en_bullet.setVelocityY(-300);

    en_bullet = en_bullets.create(enemy.x + 5, enemy.y, 'fireball');
    en_bullet.setVelocityX(500);
    en_bullet.setVelocityY(-300);
}