#Projekt "The game of life"

Opis gry:
https://pl.wikipedia.org/wiki/Gra_w_%C5%BCycie

Punkty do zrealizowania:
1. Wygenerować plansze np 50x50 (operowanie na np na divach. Nie używamy canvasów); 
2. Dodać interfejs gdzie użytkownik będzie mógł podać:
   1. Wielkość planszy, szerokość i wysokość lub jeden wymiar dla planszy o równych bokach
   2. Button do startu i zatrzymywania gry. Po wystartowaniu gry na przycisku powinien się zmieniać tekst z `start` na `stop`
   3. *szybkość gry podana w FPS
3. *Plansza powinna się dopasować do wielkości ekranu
4. Ożywanie komórki za pomocą kliknięcia

Wygląd gry jest dowolny. Zacznijcie od prostego, dopiero jak główny algorytm zacznie działać możecie pobawić się w "upiększanie"

###Zasady

1. Żywa komórka, która ma mniej niż dwóch sąsiadów, umiera (samotność).
2. Żywa komórka, która ma więcej niż trzech sąsiadów, umiera (przeludnienie).
3. Żywa komórka, która ma dwóch lub trzech sąsiadów – przeżywa.
4. Martwa komórka, która ma trzech żywych sąsiadów – ożywa.

Zwróćcie uwagę, że komórki zmieniają się w kolejnym przebiegu gru (kolejnej iteracji pętli);

Do debugowania warto skorzystać np z `console.table()`
Do ustawiania szybkości gry trzeba użyć asynchroniczności. Podobnie jak w naszej grze z zajęć.
Podczas debugowania warto w pętli określić warunek, który zrobi iteracje 1 lub 2 razy tak żeby łatwiej było znaleźć problem lub sprawdzić czy sąsiednie komórki zostały znalezione poprawnie

Do sprawdzenia poprawnego działania sprawdźcie elementy `stałe` w grze takie jak, `Blinker (światła uliczne)`, `Klocek (blok)`, `Koniczynka (ang. tub – kadź)` (nazwy z wikipedi)
Dzięki tym układom możecie sprawdzać, czy przyjęte zasady gry są spełnione.

