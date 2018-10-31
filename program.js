process.stdin.setEncoding('utf-8');

process.stdout.write('Your Node varsion: ' + process.versions.node + '\n');

process.stdin.on('readable', function() {
    
    // tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();  // trim - pozbywamy się wszystkich białych znaków z przodu i za tekstem
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }

});