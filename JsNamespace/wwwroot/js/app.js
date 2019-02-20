const JsNamespace = {
    common: {
        init: () => {
            alert('global page init');
        }
    },
    admin: {
        home: {
            init: () => {
                alert('admin home controller init')
            },
            index: () => {
                alert('in admin>home>index!')
            }
        }
    },
    home: {
        init: () => {
            alert('root home controller init');
        },
        index: () => {
            alert('in home>index!');
        },
        contact: () => {
            alert('in home>contact!');
        }
    }
}

export { JsNamespace };