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
            
            // azzero il conteggio dei tre secondi per il cambio della selezione e lo faccio ripartire
            clearInterval(scorrimentoAuto);
            scorrimentoAuto = setInterval(prossima, 3000);
        },
        vediPrecedente: function() {
            if (this.elementoSelezionato === 0) {
                this.elementoSelezionato = this.listaElementi.length - 1;
            } else {
                this.elementoSelezionato--;
            }

            // azzero il conteggio dei tre secondi per il cambio della selezione e lo faccio ripartire
            clearInterval(scorrimentoAuto);
            scorrimentoAuto = setInterval(prossima, 3000);
        },
        mostraSelezionata: function(indice) {
            // al click su una thumb, la selezione viene spostata su di essa, modificando il valore di elementoSelezionato a seconda dell'indice passato come parametro della funzione
            this.elementoSelezionato = indice;

            // azzero il conteggio dei tre secondi per il cambio della selezione e lo faccio ripartire
            clearInterval(scorrimentoAuto);
            scorrimentoAuto = setInterval(prossima, 3000);
        }
    }
    
});

// la funzione viene eseguita ogni tre secondi
let scorrimentoAuto = setInterval(prossima, 3000);

// modifice il valore di elementoSelezionato per passare all'immagine successiva
function prossima() {
    if (app.elementoSelezionato === app.listaElementi.length - 1) {
        app.elementoSelezionato = 0;
    } else {
        app.elementoSelezionato++;
    }
}