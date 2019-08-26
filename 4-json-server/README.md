![](../../kursjs.png)

# KursJS - ajax - json-server

## Zadanie 1
W pliku **data/data.json** znajduje się tablica z państwami.

Zainstaluj na swoim komputerze [json-server](https://github.com/typicode/json-server), a następnie odpal w tym katalogu poleceniem:

```
json-server --watch data/data.json
```

Następnie za pomocą wybranej metody za pomocą ajax połącz się na adres który wygeneruje ci odpalony serwer i operując na zwróconych danych wykonaj poniższe polecenia:

1. Wypisz wszystkie nazwy państw
   Jak już wypiszesz, albo kod wypisujący zakomentuj, albo obejmij poleceniami `console.groupCollapsed("Nazwy państw");` i `console.groupEnd();`
2. Wypisz ile jest ludności we wszystkich państwach
3. Wypisz średnią ludność w państwach
4. Wypisz ile jest państw, które mają dodatni wzrost
5. Wypisz ile jest państw, które mają ujemny wzrost
6. Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)
7. Napisz ile wynosi średnia dzietności na świecie (fertility_rate)
    (uwaga - niektóre kraje nie mają danych - wtedy jest null)
8. Napisz ile wynosi średnia wieku na świecie
9. Wypisz wszystkie dane na temat Polski
10. Napisz czy średnia wieku w Polsce jest większa od średniej na Świecie?
