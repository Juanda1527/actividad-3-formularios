function generarCuento() {
    const nombresApellidos = document.getElementById("nombresApellidos").value;
    const apodo = document.getElementById("apodo").value;
    const colorCabello = document.getElementById("colorCabello").value;
    const colorOjos = document.getElementById("colorOjos").value;
    const edad = document.getElementById("edad").value;
    const hobby = document.getElementById("hobby").value;

    const cuento = `
        Había una vez un(a) ${nombresApellidos}, también conocido como "${apodo}". 
        Con cabello de un hermoso color ${colorCabello} y ojos que brillaban como el ${colorOjos}, 
        a sus ${edad} años, ${apodo} disfrutaba su tiempo libre practicando su hobby favorito: ${hobby}.
        Su vida era emocionante y llena de aventuras, y hoy te contaré una de sus historias más emocionantes.

        Un día soleado, mientras ${apodo} exploraba el bosque, se encontró con una antigua cueva misteriosa.
        Intrigado(a), decidió adentrarse en la oscuridad. Allí, descubrió un pasaje secreto que lo llevó a un mundo mágico.
        En ese mundo, todo era posible. ${apodo} hizo nuevos amigos, algunos con poderes extraordinarios.

        A medida que exploraba este reino mágico, ${apodo} aprendió valiosas lecciones sobre la amistad, la valentía y la bondad.
        Ayudó a resolver conflictos y superó desafíos increíbles. Pero lo más importante, se dio cuenta de que el verdadero tesoro
        no estaba en las riquezas, sino en el amor y la amistad que compartió con sus nuevos amigos.

        Después de muchas aventuras emocionantes, ${apodo} regresó a su mundo, llevando consigo recuerdos que atesoraría para siempre.
        Desde ese día, nunca dejó de creer en la magia y siempre recordó que, en el corazón de la valentía, había un lugar para
        la compasión y el cariño.

        Y así termina nuestra historia, la historia de ${apodo}, cuyas aventuras mágicas continúan en su corazón hasta el día de hoy.
    `;

    document.getElementById("cuentoGenerado").textContent = cuento;
}
