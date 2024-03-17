function perguntaEObriga(pergunta:string,r1:string,r2:string,r3:string):string{
    let resposta : string | null;
    resposta = prompt(pergunta);
    while(resposta!=r1 && resposta!=r2 && resposta!=r3){
        alert('resposta inválida');
        resposta = prompt(pergunta);
    }
    return resposta;
}


let resposta01 : string | null;
resposta01 = perguntaEObriga('Não sei o que?\nopções:\n- correr\n- esconder\n- enfrentar','correr','esconder','enfrentar');

if(resposta01=='enfrentar'){
    alert('morreu!');
}
if(resposta01=='correr'){
    let resposta02 : string = perguntaEObriga('Você quer correr para onde?\nopções:\n- norte\n-sul','norte','norte','sul');
    if(resposta02=='sul'){
        alert('morreu');
    }
    if(resposta02=='norte'){
        alert('parabens você encontrou uma colonia segura e viveu feliz para sempre.');
    }
}
if(resposta01=='esconder'){
    let resposta03 : string = perguntaEObriga('Você quer esperar até o outro dia?\nopções:\n- sim\n-não','sim','não','não');
    if(resposta03=='sim'){
        alert('morreu de fome');
    }
    if(resposta03=='não'){
        alert('parabens o monstro já tinha ido embora e você se salvou');
    }
}
