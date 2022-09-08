
// interface Bird {
//     fly(): void
//     eat(): void
//     run(): void
//     swim(): void
// }

//segregacion de la interfaz
interface Bird {
    eat(): void
}

interface FlyingBird {
    fly(): void
}

interface RunningBird {
    run(): void
}

interface SwimmingBird {
    swim(): void
}


class Tucan implements Bird, FlyingBird {
    public fly(){}
    public eat(){}
}

class Humminbird implements Bird, FlyingBird {
    public fly(){}
    public eat(){}
}

class Ostrich implements Bird, RunningBird {
    public eat(){}
    public run(){}
}

class Penguin implements Bird, RunningBird, RunningBird {
    public eat(){}
    public run(){}
    public swim(){}
}