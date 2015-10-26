'use strict'

/**
 * Export legacy browser properties and values
 * Based on "transform" support test.
 */

exports.props = exports.values = {}



// We should not do anything if required serverside.
if (typeof document != 'undefined') {
    var legacyProps = {
        ms: {
            'order': '-ms-flexorder' ,
            'flex-grow': '-ms-flex-positive',
            'flex-shrink': '-ms-flex-negative',
            'flex-basis': '-ms-flex-preferred-size',
            'justify-content': '-ms-flex-pack',
            'align-content': '-ms-flex-line-pack',
            'align-items': '-ms-flex-align',
            'align-self': '-ms-flex-item-align'
        },
        moz: {
            'flex': '-moz-box-flex',
            'order': '-moz-box-ordinal-group',
            'flex-direction': '-moz-box-direction'
        }
    }
    var legacyValues = {
        ms: {
            'flex':'-ms-flexbox',
            'inline-flex':'-ms-inline-flexbox',
            'flex-start':'start',
            'flex-end': 'end',
            'center':'center',
            'space-between':'justify',
            'space-around':'distribute'
            },
        moz: {
            'flex':'-moz-box'
        }
    }
    var style = document.createElement('p').style
    var testProp = 'Transform'

    for (var jsPrefix in legacyProps) {
        if ((jsPrefix + testProp) in style) {
            exports.props = legacyProps[jsPrefix]
            exports.values = legacyValues[jsPrefix]
            break
        }
    }
}
