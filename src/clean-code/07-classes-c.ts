(() => {

    // aplicando principio de responsabilidad unica
    // priorizar la composicion sobre la herencia
    
    type Gender = 'M' | 'F'

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }
    
    class Person {

        public name: string
        public gender: Gender
        public birthdate: Date

        constructor({name, gender, birthdate}: PersonProps) {
            this.name = name
            this.gender = gender
            this.birthdate = birthdate
        }
    }

    interface UserProps {
        email     : string
        role      : string
    }

    class User {
        public email: string
        public role: string
        public lastAccess: Date
        constructor({
            email, 
            role 
            }: UserProps     
        ) {
            this.email = email
            this.role = role
            this.lastAccess = new Date()
        }

        checkCredentials() {
            return true
        }
    }

    interface SettingsProps {
        workingDirectory: string
        lastOpenFolder: string
    }

    class Settings {
        public workingDirectory: string
        public lastOpenFolder: string

        constructor({
            workingDirectory,
            lastOpenFolder,
          
        }: SettingsProps){
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }

    interface UserSettingsProps {
        birthdate: Date
        email: string
        gender: Gender
        lastOpenFolder: string
        name: string
        role: string
        workingDirectory: string
    }

    class UserSettings {
        public person: Person
        public user: User
        public settings: Settings

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingsProps){
            this.person = new Person({name, gender, birthdate})
            this.user = new User({email, role})
            this.settings = new Settings({lastOpenFolder, workingDirectory})
        }
    }

    const userSettings = new UserSettings({ 
        workingDirectory: 'usr/home',
        lastOpenFolder: '/home',
        email: 'jane09@user.com',
        role: 'Admin',
        name: 'Jane',
        gender: 'F',
        birthdate: new Date('1993-02-27')
    })

    console.log(userSettings.user.checkCredentials())
    console.log({userSettings})
    // areCredentialsValid: userSettings.checkCredentials()
})()