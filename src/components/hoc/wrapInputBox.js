import KeyCode from 'keycode-js';
import { compose, withState, withHandlers } from 'recompose';
import { PRIORITY_NORMAL } from '../../services/todo';

export default compose(
    withState('value', 'setValue', props => {
        return props.value || ''
    }),
    withState('priority', 'setPriority', PRIORITY_NORMAL),
    withHandlers({
        handleKeyUp: ({ addNew, setValue, setPriority, value, priority }) => e => {
            const text = e.target.value.trim();

            if (e.keyCode === KeyCode.KEY_RETURN && text) {
                addNew(text, priority);
                setValue('');
                setPriority(PRIORITY_NORMAL);
            }
        },
        handleChange: ({ setValue }) => e => {
            setValue(e.target.value);
        },
        handlePriorityChange: ({ setPriority }) => e => {
            setPriority(e.target.value);
        }
    })
);
