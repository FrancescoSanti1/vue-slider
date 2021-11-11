var app = new Vue({

    el: "#carousel",
    data: {
        elementoSelezionato: 0,
        listaElementi: [
            {
                titolo: 'Svezia',
                testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                percorso: 'img/01.jpg'
            },
            {
                titolo: 'Svizzera',
                testo: 'Lorem ipsum',
                percorso: 'img/02.jpg'
            },
            {
                titolo: 'Gran Bretagna',
                testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                percorso: 'img/03.jpg'
            },
            {
                titolo: 'Germania',
                testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                percorso: 'img/04.jpg'
            },
            {
                titolo: 'Paradise',
                testo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                percorso: 'img/05.jpg'
            }
        ]
    },
    methods: {
        vediSuccessiva: function() {
            if (this.elementoSelezionato === this.listaElementi.length - 1) {
                this.elementoSelezionato = 0;
            } else {
                this.elementoSelezionato++;
            }
        },
        vediPrecedente: function() {
            if (this.elementoSelezionato === 0) {
                this.elementoSelezionato = this.listaElementi.length - 1;
            } else {
                this.elementoSelezionato--;
            }
        }
    }
    
});

