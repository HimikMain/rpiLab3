day = Date.now();

var tmp = 0;

var lang = localStorage.getItem('lang') || 'ru';

replaceImg();

function replaceImg(){
    tmp = Math.floor(day/86400000);
    tmp %= 5;
    if (tmp == 0) {
        document.querySelector('.linker img').src = "img/karat.jpg";
        document.querySelector('.linker a').href = "autors/karatk/index.html"
        if (lang == 'ru') {
            document.querySelector('.linker h2').textContent = "Владимир Короткевич";
            document.querySelector('.linker p').innerHTML = "1930 - 1984<br>Владимир Семёнович Короткевич (белор. Уладзімір Сямёнавіч Караткевіч; 26 ноября 1930, Орша, БССР, СССР — 25 июля 1984, Минск, БССР, СССР) — белорусский советский писатель, публицист, поэт, переводчик и драматург, сценарист, классик белорусской литературы. Является одной из наиболее ярких фигур в белорусской литературе XX столетия. Стал первым белорусским писателем, обратившимся к жанру исторического детектива.";
        } else if (lang == 'en') {
            document.querySelector('.linker h2').textContent = "Vladimir Korotkevich";
            document.querySelector('.linker p').innerHTML = "1930 - 1984<br>Vladimir Semyonovich Korotkevich (belor. Uladzimir Syamenavich Karatkevich; November 26, 1930, Orsha, BSSR, USSR — July 25, 1984, Minsk, BSSR, USSR) - Belarusian Soviet writer, publicist, poet, translator and playwright, screenwriter, classic of Belarusian literature. He is one of the most prominent figures in the Belarusian literature of the XX century. He became the first Belarusian writer to turn to the genre of historical detective stories.";
        }
    } else if (tmp == 1) {
        document.querySelector('.linker img').src = "img/jakub.jpg";
        document.querySelector('.linker a').href = "autors/kolas/index.html"
        if (lang == 'ru') {
            document.querySelector('.linker h2').textContent = "Якуб Колас";
            document.querySelector('.linker p').innerHTML = "1882 - 1956<br>Белорусский советский писатель, драматург, поэт и переводчик, общественный деятель. Один из классиков и основоположников новой белорусской литературы. Народный поэт Белорусской ССР (1926). Академик АН Белорусской ССР (1928). Член СП СССР (1934). Заслуженный деятель науки Белорусской ССР (1944). Член ВКП(б) с 1945 года.";
        } else if (lang == 'en') {
            document.querySelector('.linker h2').textContent = "Jakub Kolas";
            document.querySelector('.linker p').innerHTML = "1882 - 1956<br>Belarusian Soviet writer, playwright, poet and translator, public figure. One of the classics and founders of the new Belarusian literature. People's Poet of the Belarusian SSR (1926). Academician of the Academy of Sciences of the Byelorussian SSR (1928). Member of the Joint Venture of the USSR (1934). Honored Scientist of the Belarusian SSR (1944). Member of the CPSU (b) since 1945.";
        }
    } else if (tmp == 2){
        document.querySelector('.linker img').src = "img/kupala.jpg";
        document.querySelector('.linker a').href = "autors/kupala/index.html"
        if (lang == 'ru') {
            document.querySelector('.linker h2').textContent = "Янка Купала";
            document.querySelector('.linker p').innerHTML = "1882 - 1942<br>Янка Купала (настоящее имя Иван Доминикович Луцевич, белор. Іван Дамінікавіч Луцэвіч; 25 июня (7 июля) 1882 — 28 июня 1942) — белорусский советский поэт и переводчик, драматург, публицист. Классик белорусской литературы. Народный поэт БССР (1925). Академик АН БССР (1928) и АН УССР (1929). Лауреат Сталинской премии первой степени (1941)."
        } else if (lang == 'en') {
            document.querySelector('.linker h2').textContent = "Yanka Kupala";
            document.querySelector('.linker p').innerHTML = "1882 - 1956<br>Yanka Kupala (real name Ivan Dominikovich Lutsevich, belor. Ivan Daminikavich Lutsevich; June 25 (July 7), 1882-June 28, 1942) was a Belarusian Soviet poet and translator, playwright, and publicist. Classic of Belarusian literature. People's Poet of the BSSR (1925). Academician of the Academy of Sciences of the BSSR (1928) and the Academy of Sciences of the Ukrainian SSR (1929). Winner of the Stalin Prize of the first degree (1941).";
        }
    } else if (tmp == 3){
        document.querySelector('.linker img').src = "img/tank.jpg";
        document.querySelector('.linker a').href = "autors/tank/index.html"
        if (lang == 'ru') {
            document.querySelector('.linker h2').textContent = "Максим Танк";
            document.querySelector('.linker p').innerHTML = "1912 - 1995<br>Максим Танк (белор. Максім Танк, имя при рождении Евгений Иванович Скурко; 4 сентября 1912, деревня Пильковщина, Виленская губерния, Российская империя — 7 августа 1995, Минск, Белоруссия) — белорусский советский поэт, переводчик, государственный деятель. Народный поэт Белорусской ССР (1968). Герой Социалистического Труда (1974). Лауреат Ленинской (1978) и Сталинской премии второй степени (1948). Лауреат Государственной премии Белорусской ССР имени Янки Купалы (1966). Академик АН Белорусской ССР (1972). Член КПЗБ с 1936 года. Председатель Верховного Совета Белорусской ССР (1965—1971).";
        } else if (lang == 'en') {
            document.querySelector('.linker h2').textContent = "Maxim Tank";
            document.querySelector('.linker p').innerHTML = "1912 - 1995<br>Maxim Tank (belor. Maksim Tank, birth name Yevgeny Ivanovich Skurko; September 4, 1912, village of Pilkovschina, Vilna province, Russian Empire — August 7, 1995, Minsk, Belarus) was a Belarusian Soviet poet, translator, and statesman. People's Poet of the Belarusian SSR (1968). Hero of Socialist Labor (1974). Winner of the Lenin Prize (1978) and the Stalin Prize of the second degree (1948). Winner of the Yanka Kupala State Prize of the Belarusian SSR (1966). Academician of the Academy of Sciences of the Belarusian SSR (1972). Member of the CPZB since 1936. Chairman of the Supreme Soviet of the Belarusian SSR (1965-1971).";
        }
    } else {
        document.querySelector('.linker img').src = "img/aleks.jpg";
        document.querySelector('.linker a').href = "autors/aleks/index.html"
        if (lang == 'ru') {
            document.querySelector('.linker h2').textContent = "Светлана Алексиевич";
            document.querySelector('.linker p').innerHTML = "1948 - ...<br>Светлана Александровна Алексиевич (белор. Святлана Аляксандраўна Алексіевіч, род. 31 мая 1948 года, Станислав, Украинская ССР, СССР) — советская и белорусская писательница, журналистка, сценарист документальных фильмов. Пишет на русском языке. Первый белорусский и шестой русскоязычный лауреат Нобелевской премии по литературе (2015 год). Наибольшую известность получили её книги в жанре художественно-документальной прозы «У войны не женское лицо», «Цинковые мальчики», «Чернобыльская молитва», «Время секонд хэнд». Произведения Алексиевич посвящены жизни позднего СССР и постсоветской эпохи, проникнуты чувствами сострадания и гуманизма.";
        } else if (lang == 'en') {
            document.querySelector('.linker h2').textContent = "Svetlana Alexievich";
            document.querySelector('.linker p').innerHTML = "1948 - ...<br>Svetlana Alexandrovna Alexievich (belor. Svyatlana Alyaksandrayna Alekseevich, b. May 31, 1948, Stanislav, Ukrainian SSR, USSR) — Soviet and Belarusian writer, journalist, screenwriter of documentary films. Writes in Russian. The first Belarusian and sixth Russian-speaking winner of the Nobel Prize in Literature (2015). Her best-known books in the genre of fiction and documentary prose \"The war is not a woman's face\", \"Zinc Boys\", \"Chernobyl Prayer\", \"Second-hand Time\". Alexievich's works are devoted to the life of the late USSR and the post-Soviet era, imbued with feelings of compassion and humanism.";
        }
    }
}
