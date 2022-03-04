let mover = {

    canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 &&
            nextPoint.x < config.colsCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < config.rowsCount;

    },
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите число (1, 2, 4, 6, 7, 8, ну или 9) чтобы переместиться, 'Отмена' для выхода "))
            if (isNaN(direction)) {
                return null
            }
            if (!availableDirections.includes(direction)) {
                alert("Для перемещения необходимо ввести одно из числел: 1, 2, 3, 4, 6, 7, 8, 9");
                continue;
            }
            return direction;
        }
    },
    getNextPosition(direction) {
        const NextPosition = {
            x: player.x,
            y: player.y,
        }

        switch (direction) {
            case 1:
                NextPosition.y++;
                NextPosition.x--;
                break;
            case 2:
                NextPosition.y++;
                break;
            case 3:
                NextPosition.y++;
                NextPosition.x++;
                break;
            case 4:
                NextPosition.x--;
                break;
            case 6:
                NextPosition.x++;
                break;
            case 7:
                NextPosition.y--;
                NextPosition.x--;
                break
            case 8:
                NextPosition.y--;
                break;
            case 9:
                NextPosition.y--;
                NextPosition.x++;
                break;
        }
        return NextPosition;
    }
}