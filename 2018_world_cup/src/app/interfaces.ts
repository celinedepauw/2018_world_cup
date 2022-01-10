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
    
export const groups: Group[] = [
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
                        id: 5,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 6,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 7,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 8,
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
                        id: 9,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 10,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 11,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 12,
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
                        id: 13,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 14,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 15,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 16,
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
                id: 5,
                name: "Espagne",
                flag: "https://cdn.countryflags.com/thumbs/spain/flag-800.png",
                players:[
                    {
                        id: 17,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 18,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 19,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 20,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 6,
                name: "Iran",
                flag: "https://cdn.countryflags.com/thumbs/iran/flag-800.png",
                players:[
                    {
                        id: 21,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 22,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 23,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 24,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]   
            },
            {
                id: 7,
                name: "Maroc",
                flag: "https://cdn.countryflags.com/thumbs/morocco/flag-800.png",
                players:[
                    {
                        id: 25,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 26,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 27,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 28,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 8,
                name: "Portugal",
                flag: "https://cdn.countryflags.com/thumbs/portugal/flag-800.png",
                players:[
                    {
                        id: 29,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 30,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 31,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 32,
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
                id: 9,
                name: "Australie",
                flag: "https://cdn.countryflags.com/thumbs/australia/flag-800.png",
                players:[
                    {
                        id: 33,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 34,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 35,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 36,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 10,
                name: "Danemark",
                flag: "https://cdn.countryflags.com/thumbs/denmark/flag-800.png",
                players:[
                    {
                        id: 37,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 38,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 39,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 40,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]    
            },
            {
                id: 11,
                name: "France",
                flag: "https://cdn.countryflags.com/thumbs/france/flag-800.png",
                players:[
                    {
                        id: 41,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 42,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 43,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 44,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 12,
                name: "Perou",
                flag: "https://cdn.countryflags.com/thumbs/peru/flag-800.png",
                players:[
                    {
                        id: 45,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 46,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 47,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 48,
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
                id: 13,
                name: "Argentine",
                flag: "https://cdn.countryflags.com/thumbs/argentina/flag-800.png",
                players:[
                    {
                        id: 49,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 50,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 51,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 52,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 14,
                name: "Croatie",
                flag: "https://cdn.countryflags.com/thumbs/croatia/flag-800.png",
                players:[
                    {
                        id: 53,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 54,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 55,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 56,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]    
            },
            {
                id: 15,
                name: "Islande",
                flag: "https://cdn.countryflags.com/thumbs/iceland/flag-800.png",
                players:[
                    {
                        id: 57,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 58,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 59,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 60,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 16,
                name: "Nigeria",
                flag: "https://cdn.countryflags.com/thumbs/nigeria/flag-800.png",
                players:[
                    {
                        id: 61,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 62,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 63,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 64,
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
        id: 5,
        name: "Groupe E",
        teams:[
            {
                id: 17,
                name: "Brésil",
                flag: "https://cdn.countryflags.com/thumbs/brazil/flag-800.png",
                players:[
                    {
                        id: 65,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 66,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 67,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 68,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 18,
                name: "Suisse",
                flag: "https://cdn.countryflags.com/thumbs/switzerland/flag-800.png",
                players:[
                    {
                        id: 69,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 70,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 71,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 72,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]    
            },
            {
                id: 19,
                name: "Serbie",
                flag: "https://cdn.countryflags.com/thumbs/serbia/flag-800.png",
                players:[
                    {
                        id: 73,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 74,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 75,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 76,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 20,
                name: "Costa Rica",
                flag: "https://cdn.countryflags.com/thumbs/costa-rica/flag-800.png",
                players:[
                    {
                        id: 77,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 78,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 79,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 80,
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
        id: 6,
        name: "Groupe F",
        teams:[
            {
                id: 21,
                name: "Suède",
                flag: "https://cdn.countryflags.com/thumbs/sweden/flag-800.png",
                players:[
                    {
                        id: 81,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 82,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 83,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 84,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 22,
                name: "Mexique",
                flag: "https://cdn.countryflags.com/thumbs/mexico/flag-800.png",
                players:[
                    {
                        id: 85,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 86,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 87,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 88,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]    
            },
            {
                id: 23,
                name: "Corée du Sud",
                flag: "https://cdn.countryflags.com/thumbs/south-korea/flag-800.png",
                players:[
                    {
                        id: 89,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 90,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 91,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 92,
                        firstname: "prenom4",
                        lastname: "nom4",
                        job:"Attaquant",
                        club: "club"  
                    },
                ]
            },
            {
                id: 24,
                name: "Allemagne",
                flag: "https://cdn.countryflags.com/thumbs/germany/flag-800.png",
                players:[
                    {
                        id: 93,
                        firstname: "prenom1",
                        lastname: "nom1",
                        job:"Gardien de but",
                        club: "club"  
                    },
                    {
                        id: 94,
                        firstname: "prenom2",
                        lastname: "nom2",
                        job:"Défenseur",
                        club: "club"  
                    },
                    {
                        id: 95,
                        firstname: "prenom3",
                        lastname: "nom3",
                        job:"Milieu de terrain",
                        club: "club"  
                    },
                    {
                        id: 96,
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