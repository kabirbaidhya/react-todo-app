import KeyCode from 'keycode-js'; import { compose, withState, withHandlers } from 'recompose';

export default compose( withState('value', 'setValue', props => props.value || ''),

withHandlers({
    handleChange: ({ handleChange, setValue }) => e => {
        const text = e.target.value;

        // Always update the HOC's local input value.
        setValue(text);

        // Notify the parent if a custom handler exists.
        if (handleChange) {
            handleChange(text);
        }
    },

    handleKeyUp: ({ handleKeyUp, addNew, setValue }) => e => {
        // Use the custom handler in Edit mode.
        if (handleKeyUp) {
            handleKeyUp(e);
            return;
        }

        // Default behavior in Create mode.
        const text = e.target.value.trim();

        if (
            e.keyCode === KeyCode.KEY_RETURN &&
            text &&
            addNew
        ) {
            addNew(text);
            setValue('');
        }
    }
})


);