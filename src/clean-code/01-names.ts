(() => {
    const filesToEvaluate = [
        {id: 1, flagged: false},
        {id: 2, flagged: false},
        {id: 3, flagged: true},
        {id: 4, flagged: false},
        {id: 5, flagged: false},
        {id: 7, flagged: false},
    ]

    const files = filesToEvaluate.map(f => f.flagged)
})

class AbstractUser{}
class UserMixin{}
class UserImplementation{}
interface IUser{}
