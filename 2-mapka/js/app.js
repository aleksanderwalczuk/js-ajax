const map = L.map('mapid').setView([51.919437, 19.145136], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2FydG9mZWxlazAwNyIsImEiOiJjanRpazhyM2owbHUwNDluem40Ynljdm5hIn0.kYoJkNni5ksRyA0gy1yV7A'
}).addTo(map);

/*----------------------------------------------------
 !!! powyzszego nie ruszaj, to mapa wstawiona za pomocą leafletjs
 wzorowana na tutorialu ze strony: https://leafletjs.com/examples/quick-start/
 Skrypt pisz poniżej
 ----------------------------------------------------*/

//  ## Zadanie 1
//  Pobierz dane z adresu:
//  https://restcountries.eu/rest/v2/all?fields=iso2Code;name
//  W odpowiedzi dostaniesz listę państw.
//  Na jej podstawie wygeneruj option'y i wrzuć je do selekta o id #countrySelect
//  Każdy option powinien mieć postać np. &lt;option value="Afganistan">Afganistan&lt;/option>
//  Po wrzuceniu optionów musisz aktywować ten selekt, bo jest obecnie disabled

//  ## Zadanie 2
//  Podepnij się pod "zmianę" selekta.
//  Gdy ktoś wybierze inną opcję z selekta, pobierz jego wartość i wykonaj połączenie ajax na adres:
//   https://restcountries.eu/rest/v2/name/NAZWA_PANSTWA

//  Po zakończeniu połączenia wypełnij element #countryData odpowiednim HTMLem (najłatwiej wygenerować cały html za pomocą template string).

//  Wszystkie dane niezbędne do uzupełnienia możesz pobrać z odpowiedzi.
//  **UWAGA! Odpowiedź to jest TABLICA z 1 obiektem**. Najlepiej stworzyć sobie dodatkową zmienną (np. country), pod który podstawimy 1 obiekt z tej tablicy.

//  ## Zadanie 3
//  Zmień flagę państwa czyli element #countryFlag (także pobierzesz to z odpowiedzi)

//  ## Zadanie 4
//  Wycentruj mapę na danym państwie kodem:
//  ```
//  //setView([lat, lng], zoom)
//  map.setView([51.919437, 19.145136], 5);
//  ```
//  Pozycje lat i lng musisz pobrać z odpowiedzi.

document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector("#countrySelect");

    //zadanie 1
    fetch("https://restcountries.eu/rest/v2/all?fields=iso2Code;name")
        .then(res => res.json())
        .then(res => {
            for (const el of res) {
                const option = document.createElement("option");
                option.value = el.name;
                option.innerText = el.name;
                select.appendChild(option);
            }
            select.removeAttribute("disabled");

            //dodatkowo odpale dla selekta change, by od razu bylo wybrane 1 panstwo
            const change = new Event("change");
            select.dispatchEvent(change)
        })

    //zadanie 2
    select.addEventListener("change", function() {
        const name = encodeURI(this.value);
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json())
            .then(res => {
                const country = res[0];
                //console.log(country)

                const el = document.querySelector('#countryData');
                el.innerHTML = `
                    <h3 class="country-name">
                        ${country.name}
                    </h3>
                    <div>
                        Stolica: <strong>${country.capital}</strong>
                    </div>
                    <div>
                        Region: <strong>${country.region}</strong>
                    </div>
                    <div>
                        Podregion: <strong>${country.subregion}</strong>
                    </div>
                    <div>
                        Liczba ludności: <strong>${country.population}</strong>
                    </div>
                    <div>
                        Strefa czasowa: <strong>${country.timezones}</strong>
                    </div>
                `;

                //zadanie 3
                const flag = document.querySelector("#countryFlag");
                flag.setAttribute("src", country.flag);

                //zadanie 4
                map.setView([country.latlng[0], country.latlng[1]], 5);
            });
    });

});