function fire ()
{
     var bullet;

    if (flip)
    {
        bullet = bullets.create(player.x - 5, player.y, 'fireball');
        bullet.setVelocityX(-1000);
        bullet.setVelocityY(-100);
    }
    else
    {
        bullet = bullets.create(player.x + 5, player.y, 'fireball');
        bullet.setVelocityX(1000);
        bullet.setVelocityY(-100);
    }
}