(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorsByMovieId( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getUserBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface Movie {
        title: string,
        description: string,
        rating: number,
        casting: string[]
    }

    function createMovie({title, description, rating, casting}: Movie) {
        console.log({ title, description, rating, casting });
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    //get pay amoumt
    // const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    //     let result;
    //     if ( isDead ) {
    //         result = 1500;
    //     } else {
    //         if ( isSeparated ) {
    //             result = 2500;
    //         } else {
    //             if ( isRetired ) {
    //                 result = 3000;
    //             } else {
    //                 result = 4000; 
    //             }
    //         }
    //     }
        
    //     return result;
    // }

    //get pay amount mejorada
    // const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    //     if (isDead) {
    //         return 1500
    //     }

    //     if (isSeparated) {
    //         return 2500
    //     }

    //     if (isRetired) {
    //         return 3000
    //     }

    //     return 4000
    // }

    //get payAmount aun mas mejorada
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if (isDead) return 1500
        
        if (isSeparated) return 2500

        return (isRetired) ? 3000 : 4000
    }

})();
