export interface Group {
    id: number,
    name: string,
    teams: Team[]
}

export interface Team {
    id: number,
    name: string,
    flag: string,
    players: Player[]
}

export interface Player {
    id: number,
    firstname: string,
    lastname: string,
    job: string,
    club: string
 }

export const groupsForMenu = [
    {
      id: 1,
      name: "Groupe A",
      teams:[]
    },
    {
        id: 2,
        name: "Groupe B",
        teams:[]
    },
    {
        id: 3,
        name: "Groupe C",
        teams:[]
    },
    {
        id: 4,
        name: "Groupe D",
        teams:[]
    },

]

export const allTeams: Team[] = []
    

export const groups = [
    {
        id: 1,
        name: "Groupe A",
        teams:[
            {
                id: 1,
                name: "Egypte",
                flag: "https://cdn.countryflags.com/thumbs/egypt/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 2,
                name: "Russie",
                flag: "https://cdn.countryflags.com/thumbs/russia/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]  
            },
            {
                id: 3,
                name: "Arabie Saoudite",
                flag: "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 4,
                name: "Uruguay",
                flag: "https://cdn.countryflags.com/thumbs/uruguay/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Groupe B",
        teams:[
            {
                id: 1,
                name: "Espagne",
                flag: "https://cdn.countryflags.com/thumbs/spain/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 2,
                name: "Iran",
                flag: "https://cdn.countryflags.com/thumbs/iran/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]   
            },
            {
                id: 3,
                name: "Maroc",
                flag: "https://cdn.countryflags.com/thumbs/morocco/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 4,
                name: "Portugal",
                flag: "https://cdn.countryflags.com/thumbs/portugal/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Groupe C",
        teams:[
            {
                id: 1,
                name: "Australie",
                flag: "https://cdn.countryflags.com/thumbs/australia/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 2,
                name: "Danemark",
                flag: "https://cdn.countryflags.com/thumbs/denmark/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]    
            },
            {
                id: 3,
                name: "France",
                flag: "https://cdn.countryflags.com/thumbs/france/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 4,
                name: "Perou",
                flag: "https://cdn.countryflags.com/thumbs/peru/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Groupe D",
        teams:[
            {
                id: 1,
                name: "Argentine",
                flag: "https://cdn.countryflags.com/thumbs/argentina/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 2,
                name: "Croatie",
                flag: "https://cdn.countryflags.com/thumbs/croatia/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]    
            },
            {
                id: 3,
                name: "Islande",
                flag: "https://cdn.countryflags.com/thumbs/iceland/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 4,
                name: "Nigeria",
                flag: "https://cdn.countryflags.com/thumbs/nigeria/flag-800.png",
                players:[
                    {
                        id: 1,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 2,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 3,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 4,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            }
        ]
    },
]