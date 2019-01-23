const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

const paulName = beatles.members[1].name;
const beatlesFormed = beatles.history.formed
const beatlesDisband = beatles.history.disbanded
const paulBirth = beatles.members[1].birth
const albumCont = beatles.albums[3]
console.log(`"${paulName} was in the Beatles from ${beatlesFormed} to ${beatlesDisband} and was born in ${paulBirth}. He contributed heavily to ${albumCont}`)
