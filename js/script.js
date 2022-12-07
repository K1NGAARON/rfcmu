const target = document.querySelector('.wrapper table tr');

const teamList = [
    {
        role: 'TVJO',
        fname: 'Stijn',
        lname: 'NAESSENS'
    },
    {
        role: 'JC',
        fname: 'Maarten',
        lname: 'De Vlieger'
    },
    {
        role: 'JC',
        fname: 'Maarten',
        lname: 'Dekocker'
    },
    {
        role: 'JC technics',
        fname: 'Yves',
        lname: "D'Haene"
    },
    {
        role: 'JC tactics',
        fname: 'Tom',
        lname: 'Vanhee'
    },
    {
        role: 'JC doelmannen',
        fname: 'Davy',
        lname: 'Lammertyn'
    },
    {
        role: 'Video analyse',
        fname: 'Tom',
        lname: 'Vanhee'
    },
    {
        role: 'JC CLUSK',
        fname: 'Jürgen',
        lname: 'Dierick '
    },
    {
        role: 'LTAPD CLUSK spinning',
        fname: 'Jasper',
        lname: 'Dejonghe'
    },
    {
        role: 'LTAPD CLUSK judo',
        fname: 'Pieter-Jan',
        lname: 'Ghyselen'
    },
    {
        role: 'LTAPD CLUSK revalidatie',
        fname: 'Maxim',
        lname: 'Ver Eecke '
    },
    {
        role: 'LTPD trainer',
        fname: 'Florin',
        lname: 'Frunza'
    },
    {
        role: 'LTPD trainer',
        fname: 'Arne',
        lname: 'Azou'
    },
    {
        role: 'Technics',
        fname: 'Ned',
        lname: 'Charles'
    },
    {
        role: 'Technics',
        fname: 'Yves',
        lname: "D'Haene"
    },
    {
        role: 'Technics',
        fname: 'Florin',
        lname: 'Frunza'
    },
    {
        role: 'Mandel B',
        fname: 'Louis',
        lname: 'Boussen'
    },
    {
        role: 'Mandel B',
        fname: 'Dries',
        lname: 'Vandenbussche '
    },
    {
        role: 'TG',
        fname: 'Stijn',
        lname: 'Naessens'
    },
    {
        role: 'U17A',
        fname: 'Jürgen',
        lname: 'Dierick '
    },
    {
        role: 'U17S',
        fname: 'Sergio',
        lname: 'Seynhaeve'
    },
    {
        role: 'U17S',
        fname: 'Ned',
        lname: 'Charles'
    },
    {
        role: 'U16A',
        fname: 'Arne',
        lname: 'Azou'
    },
    {
        role: 'U15A',
        fname: 'Maarten',
        lname: 'De Vlieger'
    },
    {
        role: 'U15S',
        fname: 'Christophe',
        lname: "TJaeckx"
    },
    {
        role: 'U14A',
        fname: 'Koen',
        lname: 'Cardoen'
    },
    {
        role: 'U13A1',
        fname: 'Eddy',
        lname: 'Lagae '
    },
    {
        role: 'U13A2',
        fname: 'Niko',
        lname: 'Hoornaert'
    },
    {
        role: 'U13S',
        fname: 'Remco',
        lname: 'Kentie'
    },
    {
        role: 'U13S',
        fname: 'Ricardo',
        lname: 'Perneel'
    },
    {
        role: 'U12A1',
        fname: 'Stefan',
        lname: 'Dierkens'
    },
    {
        role: 'U12A2',
        fname: 'Ned',
        lname: 'Charles'
    },
    {
        role: 'U11A1',
        fname: 'Yves',
        lname: "D'Haene"
    },
    {
        role: 'U11A2',
        fname: 'Jaron',
        lname: 'Dumortier '
    },
    {
        role: 'U11S',
        fname: 'Dieter',
        lname: 'Van De Kerckhove '
    },
    {
        role: 'U10A1',
        fname: 'Frederik',
        lname: 'Schacht'
    },
    {
        role: 'U10A2',
        fname: 'Kjell',
        lname: 'Dedeurwaerder'
    },
    {
        role: 'U9A1',
        fname: 'Tom',
        lname: 'De Ryckere '
    },
    {
        role: 'U9A2',
        fname: 'Kevin',
        lname: 'Derudder'
    },
    {
        role: 'U9S',
        fname: 'Lode',
        lname: 'Blomme'
    },
    {
        role: 'U8A1',
        fname: 'Mick',
        lname: 'Tavernier'
    },
    {
        role: 'U8A2',
        fname: 'Serge',
        lname: 'Dejonghe'
    },
    {
        role: 'U8S',
        fname: 'Dieter',
        lname: 'Parmentier'
    },
    {
        role: '',
        fname: 'Serge',
        lname: 'Dejonghe'
    },
    {
        role: '',
        fname: 'Lukas',
        lname: 'Devos'
    },
    {
        role: '',
        fname: 'Jules',
        lname: 'Pilet'
    },
    {
        role: '',
        fname: 'Mathieu',
        lname: 'Dumon'
    },
    {
        role: '',
        fname: 'Andreas',
        lname: 'Terryn'
    },
    {
        role: '',
        fname: 'Rein',
        lname: 'Verschuere'
    },
    {
        role: '',
        fname: 'Carlos',
        lname: 'Werbrouck'
    },
    {
        role: '',
        fname: 'Davy',
        lname: 'Lammertyn'
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
            </tr>
        `;
        target.insertAdjacentHTML("afterend", tableRows);
    };

}


document.addEventListener('DOMContentLoaded', createTable);