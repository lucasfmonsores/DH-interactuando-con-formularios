window.onload = function () {
      let titulo = document.querySelector(".moviesAddTitulo");
      let formulario = document.querySelector("#formulario");
      let article = document.querySelector("article");
      titulo.innerHTML = "AGREGAR PELÍCULA";
      titulo.classList.add("titulo");
      article.classList.add("fondoTransparente");
      formulario.classList.add("fondoCRUD");

      //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
      //-------------------DE REGISTRO DE PELÍCULAS------------------//
      let form = document.querySelector("form.form");
      let errores = document.querySelector(".errores");
      let title = document.querySelector("#title");
      let rating = document.querySelector("#rating");
      let awards = document.querySelector("#awards");
      let release_date = document.querySelector("#release_date");
      let length = document.querySelector("#length");
      let genreID = document.querySelector("#genre_id");

      title.focus();
      let errors = [];
      title.addEventListener("blur", () => {
            if (title.value == "") {
                  title.classList.add("is-invalid");
                  errors.push("El Titulo no puede estar vacio");
            } else {
                  title.classList.remove("is-invalid");
                  title.classList.add("is-valid");
                  errors = errors.filter((elem) => elem !== "El Titulo no puede estar vacio");
            }
      });

      rating.addEventListener("blur", () => {
            if (rating.value == "") {
                  rating.classList.add("is-invalid");
                  errors.push("La calificación no puede estar vacia");
            } else if (rating.value < 0 || rating.value > 10) {
                  rating.classList.add("is-invalid");
                  errors.push("Solo valores entre 0 y 10");
            } else {
                  rating.classList.remove("is-invalid");
                  rating.classList.add("is-valid");
                  errors = errors.filter((elem) => elem !== "La calificación no puede estar vacia" || elem !== "Solo valores entre 0 y 10");
            }
      });
      awards.addEventListener("blur", () => {
            if (awards.value == "") {
                  awards.classList.add("is-invalid");
                  errors.push("El premio no puede estar vacio");
            } else if (awards.value < 0 && awards.value > 10) {
                  awards.classList.add("is-invalid");
                  errors.push("Solo valores entre 0 y 10");
            } else {
                  awards.classList.remove("is-invalid");
                  awards.classList.add("is-valid");
                  errors = errors.filter((elem) => elem !== "El premio no puede estar vacio" || elem !== "Solo valores entre 0 y 10");
            }
      });
      release_date.addEventListener("blur", () => {
            if (release_date.value == "") {
                  release_date.classList.add("is-invalid");
                  errors.push("La fecha no puede estar vacia");
            } else {
                  release_date.classList.remove("is-invalid");
                  release_date.classList.add("is-valid");
                  errors = errors.filter((elem) => elem !== "La fecha no puede estar vacia");
            }
      });
      length.addEventListener("blur", () => {
            if (length.value == "") {
                  length.classList.add("is-invalid");
                  errors.push("La duración no puede estar vacia");
            } else if (length.value < 60 || length.value > 360) {
                  length.classList.add("is-invalid");
                  errors.push("Solo valores entre 60 y 360");
            } else {
                  length.classList.remove("is-invalid");
                  length.classList.add("is-valid");
                  errors = errors.filter((elem) => elem !== "La duración no puede estar vacia" || elem !== "Solo valores entre 60 y 360");
            }
      });
      genreID.addEventListener("blur", () => {
            if (!genreID.value.trim()) {
                  genreID.classList.add("is-invalid");
                  errors.push("Seleccione un genero");
            } else {
                  genreID.classList.remove("is-invalid");
                  genreID.classList.add("is-valid");
                  errors = errors.filter((elem) => elem !== "Seleccione un genero");
            }
      });

      form.addEventListener("submit", (e) => {
            errors = [];
            const FORM_ELEMENTS = e.target.elements;
            for (let index = 0; index < FORM_ELEMENTS.length - 1; index++) {
                  const element = FORM_ELEMENTS[index];
                  element.dispatchEvent(new Event("blur"));
            }
            if (errors.length > 0) {
                  e.preventDefault();
                  errores.classList.add("alert-warning");
                  errores.innerHTML = "";
                  for (let i = 0; i < errors.length; i++) {
                        console.log(errors[i]);
                        errores.innerHTML += "<li>" + errors[i] + "</li>";
                  }
            } else {
                  alert("La película se guardó satisfactoriamente");
            }
      });
};
