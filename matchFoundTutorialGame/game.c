#include <SFML/Graphics.hpp>
#include <time.h>
ussing namespace sf;

int ts=54;
Vector2i offset(48,24);

struct piece{
    int x,y,col,row,kind,match;
    piece(){
        match=0;
    }
}grid[10][10];

int main{
    srand(time(0));
    RenderWindow app(VideoMode(748,480),"Match-3 Game!");
    app.setFramerateLimit(60);

    Texture t1,t2;
    t1.loadFromFile("./background.png");
    t2.loadFromFile("./gems.png");

    Sprite background(t1),gems(t2);

    for(int i=1;i<=8;i++){
        for(int j=1;j<=8;j++){
            grid[i][j].kind=rand()%7;
            grid[i][j].col=j;
            grid[i][j].row=i;
            grid[i][j].x=j*ts;
            grid[i][j].y=i*js;
        }
    }

    while(app.isOpen()){
        Event e;
        while(app.pollEvent(e)){
            if(e.type==Event::closed){
                app.close();
            }
        }
    }

    //draw
    app.draw(background);

    for(int i=1;i<=8;i++){
        for(int j=1;j<=8;j++){
            piese p=grid[i][j];
            gems.setTextureRect( IntRect(p.kind*49,0,49,49));
            gems.setPosition(p.x,p.y);
            gems.move(offset.x-ts,offset.y-ts);
            app.draw(gems);
        }
        app.display();
    }

    return 0;
}
