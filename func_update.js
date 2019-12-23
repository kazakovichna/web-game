function update ()
{
    if(moveKeys['left_A'].isDown)
    {
        player.setVelocityX(-160);
        flip = true;
        player.anims.play('left', true);
    }
    else if(moveKeys['right_D'].isDown)
    {
        player.setVelocityX(160);
        flip = false;
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.space.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}