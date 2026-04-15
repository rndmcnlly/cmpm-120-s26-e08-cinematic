class Intro extends Phaser.Scene {
    create() {
        let r = this.add.rectangle(
            0,0,
            this.game.config.width, this.game.config.height,
            0xE6C1F5);

        r.alpha = 0;
        this.tweens.add({
            targets: r,
            alpha: 1,
            duration: 2000,
        })
    }
}

const game = new Phaser.Game({
    width: 200,
    height: 300,
    scene: [Intro]
});