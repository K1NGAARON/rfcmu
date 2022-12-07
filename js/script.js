const target = document.querySelector('.wrapper table tr');

const teamList = [
    {
        role: 'TVJO',
        fname: 'Stijn',
        lname: 'Naessens',
        email: 'naessensstijn@gmail.com',
        dep: ''
    },
    {
        role: 'JC',
        fname: 'Maarten',
        lname: 'De Vlieger',
        email: 'maarten.de.vlieger@hotmail.be',
        dep: ''
    },
    {
        role: 'JC',
        fname: 'Maarten',
        lname: 'Dekocker',
        email: 'maarten.dekocker@gmail.com',
        dep: ''
    },
    {
        role: 'JC technics',
        fname: 'Yves',
        lname: "D'Haene",
        email: 'yves.dhaene1@telenet.be ',
        dep: ''
    },
    {
        role: 'JC tactics',
        fname: 'Tom',
        lname: 'Vanhee',
        email: 'vanheetom@hotmail.com',
        dep: ''
    },
    {
        role: 'JC doelmannen',
        fname: 'Davy',
        lname: 'Lammertyn',
        email: 'keepersschoolgoalies@gmail.com',
        dep: ''
    },
    {
        role: 'Video analyse',
        fname: 'Tom',
        lname: 'Vanhee',
        email: 'vanheetom@hotmail.com',
        dep: ''
    },
    {
        role: 'JC CLUSK',
        fname: 'Jürgen',
        lname: 'Dierick ',
        email: 'jurgen-dierick@telenet.be',
        dep: ''
    },
    {
        role: 'LTAPD CLUSK spinning',
        fname: 'Jasper',
        lname: 'Dejonghe',
        email: 'jasper.dejonghe@telenet.be',
        dep: ''
    },
    // {
    //     role: 'LTAPD CLUSK judo',
    //     fname: 'Pieter-Jan',
    //     lname: 'Ghyselen',
    //     email: '',
    //     dep: ''
    // },
    {
        role: 'LTAPD CLUSK revalidatie',
        fname: 'Maxim',
        lname: 'Ver Eecke',
        email: 'maxim.vereecke.2001@gmail.com',
        dep: ''
    },
    {
        role: 'LTAPD CLUSK aerobic',
        fname: 'Rieneke',
        lname: 'Catteeuw',
        email: '',
        dep: ''
    },
    {
        role: 'LTPD trainer',
        fname: 'Florin',
        lname: 'Frunza',
        email: 'frunzaflorin@gmail.com',
        dep: ''
    },
    {
        role: 'LTPD trainer',
        fname: 'Arne',
        lname: 'Azou',
        email: 'mario.vancompernolle@proximus.be ',
        dep: ''
    },
    {
        role: 'Technics',
        fname: 'Ned',
        lname: 'Charles',
        email: 'mauricieng@gmail.com',
        dep: ''
    },
    {
        role: 'Technics',
        fname: 'Yves',
        lname: "D'Haene",
        email: 'yves.dhaene1@telenet.be ',
        dep: ''
    },
    {
        role: 'Technics',
        fname: 'Florin',
        lname: 'Frunza',
        email: 'frunzaflorin@gmail.com',
        dep: ''
    },
    {
        role: 'Mandel B',
        fname: 'Louis',
        lname: 'Boussen',
        email: 'louisboussen@msn.com',
        dep: 'Patrick Meurisse'
    },
    {
        role: 'Mandel B',
        fname: 'Dries',
        lname: 'Vandenbussche',
        email: 'driesvandenbussche@hotmail.com',
        dep: ''
    },
    {
        role: 'TG',
        fname: 'Stijn',
        lname: 'Naessens',
        email: 'naessensstijn@gmail.com',
        dep: 'Bouazza Karim'
    },
    {
        role: 'U17A',
        fname: 'Jürgen',
        lname: 'Dierick ',
        email: 'jurgen-dierick@telenet.be',
        dep: 'Maertens Hans-Peter'
    },
    {
        role: 'U17S',
        fname: 'Sergio',
        lname: 'Seynhaeve',
        email: 'seynhaeve.sergio@telenet.be ',
        dep: ''
    },
    {
        role: 'U17S',
        fname: 'Ned',
        lname: 'Charles',
        email: 'mauricieng@gmail.com',
        dep: 'KFC Meulebeke'
    },
    {
        role: 'U16A',
        fname: 'Arne',
        lname: 'Azou',
        email: 'azouarne@gmail.com',
        dep: 'Wim Van Laethem'
    },
    {
        role: 'U15A',
        fname: 'Maarten',
        lname: 'De Vlieger',
        email: 'maarten.de.vlieger@hotmail.be ',
        dep: 'Labarque Fritzgerald'
    },
    {
        role: 'U15S',
        fname: 'Christophe',
        lname: "TJaeckx",
        email: 'tine.houtekier@proximus.be',
        dep: 'Davy Baert'
    },
    {
        role: 'U14A',
        fname: 'Koen',
        lname: 'Cardoen',
        email: 'koen.cardoen22@telenet.be ',
        dep: 'Wim Deprez'
    },
    {
        role: 'U13A1',
        fname: 'Eddy',
        lname: 'Lagae',
        email: 'eddy.lagae@skynet.be',
        dep: 'Jonas Noppe'
    },
    {
        role: 'U13A2',
        fname: 'Niko',
        lname: 'Hoornaert',
        email: 'hoornaert.niko@telenet.be',
        dep: 'Sammy Tallieu'
    },
    {
        role: 'U13S',
        fname: 'Remco',
        lname: 'Kentie',
        email: 'remcokentie@gmail.com',
        dep: 'Pieter-Jan Stragier'
    },
    {
        role: 'U13S',
        fname: 'Ricardo',
        lname: 'Perneel',
        email: 'ricardoperneel@hotmail.com ',
        dep: ''
    },
    {
        role: 'U12A1',
        fname: 'Stefan',
        lname: 'Dierkens',
        email: 'stefan.dierkens@skynet.be ',
        dep: 'Steven Van Schuerbeeck'
    },
    {
        role: 'U12A2',
        fname: 'Ned',
        lname: 'Charles',
        email: 'mauricieng@gmail.com',
        dep: 'Tommy Geldof'
    },
    {
        role: 'U11A1',
        fname: 'Yves',
        lname: "D'Haene",
        email: 'yves.dhaene1@telenet.be ',
        dep: 'Andy Colpaert'
    },
    {
        role: 'U11A2',
        fname: 'Jaron',
        lname: 'Dumortier',
        email: 'dumortierjaron358@gmail.com',
        dep: 'Sven Dedecker'
    },
    // {
    //     role: 'U11S',
    //     fname: 'Dieter',
    //     lname: 'Van De Kerckhove',
    //     email: '',
    //     dep: ''
    // },
    {
        role: 'U10A1',
        fname: 'Frederik',
        lname: 'Schacht',
        email: 'frederik.schacht@telenet.be ',
        dep: 'Christophe Moonen'
    },
    {
        role: 'U10A2',
        fname: 'Kjell',
        lname: 'Dedeurwaerder',
        email: 'dedeurwaerder_k@hotmail.com',
        dep: 'Patrick Dedeurwaarder'
    },
    {
        role: 'U9A1',
        fname: 'Tom',
        lname: 'De Ryckere',
        email: 'tom.de.ryckere@telenet.be ',
        dep: 'Lies Decaesstecker'
    },
    {
        role: 'U9A2',
        fname: 'Kevin',
        lname: 'Derudder',
        email: 'rudderke27@hotmail.com',
        dep: 'Benny Tack'
    },
    {
        role: 'U9S',
        fname: 'Lode',
        lname: 'Blomme',
        email: 'lodeblomme08@gmail.com',
        dep: 'Bjorn Blomme'
    },
    {
        role: 'U8A1',
        fname: 'Mick',
        lname: 'Tavernier',
        email: 'micktavernier@gmail.com',
        dep: 'Sharon Buyse'
    },
    {
        role: 'U8A2',
        fname: 'Serge',
        lname: 'Dejonghe',
        email: 'serge.dejonghe@proximus.be',
        dep: 'Annelies Wieland'
    },
    {
        role: 'U8S',
        fname: 'Dieter',
        lname: 'Parmentier',
        email: 'dieterparmentier81@gmail.com ',
        dep: 'Sead Skoko'
    },
    {
        role: 'U6 - U7',
        fname: 'Serge',
        lname: 'Dejonghe',
        email: 'serge.dejonghe@proximus.be',
        dep: ''
    },
    {
        role: 'U6 - U7',
        fname: 'Lukas',
        lname: 'Devos',
        email: '',
        dep: ''
    },
    {
        role: 'U6 - U7',
        fname: 'Jules',
        lname: 'Pilet',
        email: '',
        dep: ''
    },
    {
        role: 'U6 - U7',
        fname: 'Mathieu',
        lname: 'Dumon',
        email: 'mathieu.dumon2002@gmail.com',
        dep: ''
    },
    {
        role: 'U6 - U7',
        fname: 'Andreas',
        lname: 'Terryn',
        email: '',
        dep: ''
    },
    {
        role: 'U6 - U7',
        fname: 'Rein',
        lname: 'Verschuere',
        email: 'rein.verschuere@gmail.com ',
        dep: ''
    },
    {
        role: 'dames-meisjes',
        fname: 'Carlos',
        lname: 'Werbrouck',
        email: 'carlos.werbrouck@telenet.be',
        dep: 'Tatjana Huyghebaert'
    }
];


function createTable(e) {
    for (let i = 0; i < teamList.length; i++) {
        const tableRows = `
            <tr>
                <td class="fname">
                    ${teamList[i].fname}
                </td>
                <td class="lname">
                    ${teamList[i].lname}
                </td>
                <td class="role">
                    ${teamList[i].role}
                </td>
                <td class="email">
                    ${teamList[i].email}
                </td>
                <td class="delegate">
                    ${teamList[i].dep}
                </td>
            </tr>
        `;
        target.insertAdjacentHTML("afterend", tableRows);
    };

}


document.addEventListener('DOMContentLoaded', createTable);