let resposta : string | null;

resposta = prompt('Não sei o que, não sei o que e etc.\nopções:\n- correr\n- esconder\n- enfrentar');
while(resposta!='correr' && resposta!='esconder' && resposta!='enfrentar'){
    alert('Resposta inválida');
    resposta = prompt('Não sei o que, não sei o que e etc.\nopções:\n- correr\n- esconder\n- enfrentar');
}

if(resposta=='enfrentar'){
    alert('morreu!');
}
if(resposta=='correr'){
    resposta = prompt('Você quer correr para onde?\nopções:\n- norte\n-sul');
    while(resposta!='norte' && resposta!='sul'){
        alert('Resposta inválida');
        resposta = prompt('Você quer correr para onde?\nopções:\n- norte\n-sul');
    }
    if(resposta=='sul'){
        alert('morreu');
    }
    if(resposta=='norte'){
        alert('parabens você encontrou uma colonia segura e viveu feliz para sempre.');
    }
}
if(resposta=='esconder'){
    resposta = prompt('Você quer esperar até o outro dia?\nopções:\n- sim\n-não');
    while(resposta!='sim' && resposta!='não'){
        alert('Resposta inválida');
        resposta = prompt('Você quer esperar até o outro dia?\nopções:\n- sim\n-não');
    }
    if(resposta=='sim'){
        alert('morreu de fome');
    }
    if(resposta=='não'){
        alert('parabens o monstro já tinha ido embora e você se salvou');
    }
}
