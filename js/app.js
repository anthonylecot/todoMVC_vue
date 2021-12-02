/*global Vue, todoStorage */

(function(exports) {

    'use strict';

    exports.app = new Vue({

        // the root element that will be compiled
        el: '.todoapp',

        // app initial state
        data: {
            todos: todoStorage.fetch(),
            newTodo: '',
            editedTodo: null,
        },

        // watch todos change for localStorage persistence
        watch: {
            todos: {
                deep: true,
                handler: todoStorage.save
            }
        },

        // computed properties
        // http://vuejs.org/guide/computed.html
        computed: {

        },

        // methods that implement data logic.
        // note there's no DOM manipulation here at all.
        methods: {

            addTodo: function() {

            },

            removeTodo: function(todo) {

            },

            editTodo: function(todo) {

            },

            doneEdit: function(todo) {

            },

            cancelEdit: function(todo) {

            },

        },

        // a custom directive to wait for the DOM to be updated
        // before focusing on the input field.
        // http://vuejs.org/guide/custom-directive.html
        directives: {
            'todo-focus': function(el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        }
    });

})(window);