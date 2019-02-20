const JsNamespace = {
    common: {
        init: () => {
            document.body.innerHTML += '<p>global page init</p>';
        }
    },
    home: {
        init: () => {
            document.body.innerHTML += '<p>root home controller init</p>';
        }
    },
    admin: {
        home: {
            init: () => {
                document.body.innerHTML += '<p>admin home controller init</p>';
            }
        }
    }
}

export { JsNamespace };