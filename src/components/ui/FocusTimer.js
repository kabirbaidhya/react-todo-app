import React, {Component} from 'react';

class FocusTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customDuration: 25
        };
    }

    // Format time from seconds to MM:SS
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Calculate the circumference of the circle for the progress indicator
    getCircleCircumference() {
        const radius = 80;
        return 2 * Math.PI * radius;
    }

    // Calculate the progress stroke dashoffset based on the remaining time
    getProgressDashoffset() {
        const circumference = this.getCircleCircumference();
        const progress = (this.props.data.focusSession.timer / (25 * 60)) * circumference;
        return circumference - progress;
    }

    // Handle time preset selection
    handlePresetSelection(minutes) {
        this.props.actions.setFocusTimer(minutes);
        this.setState({customDuration: minutes});
    }

    // Handle custom duration input change
    handleCustomDurationChange(e) {
        this.setState({customDuration: e.target.value});
    }

    // Apply custom duration
    applyCustomDuration() {
        const duration = parseInt(this.state.customDuration, 10);
        if (duration > 0 && duration <= 60) {
            this.props.actions.setFocusTimer(duration);
        }
    }

    // Handle focus session completion
    handleCompleteSession() {
        // Show confirmation dialog
        const confirmComplete = window.confirm('Focus session completed! Would you like to mark the associated todo as complete?');
        this.props.actions.completeFocusSession(confirmComplete);
    }

    // Check if timer has reached zero and show confirmation
    componentDidUpdate(prevProps) {
        if (prevProps.data.focusSession.timer > 0 && this.props.data.focusSession.timer <= 0 && !this.props.data.focusSession.isRunning) {
            this.handleCompleteSession();
        }
    }

    render() {
        const {focusSession} = this.props.data;
        const {startFocusSession, pauseFocusSession, stopFocusSession} = this.props.actions;
        const currentTodo = this.props.data.list.find(todo => todo.id === focusSession.currentTodoId);
        
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h3 className="text-center">Focus Session</h3>
                            </div>
                            <div className="card-body">
                                {/* Circle Timer */}
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="position-relative">
                                        <svg width="200" height="200">
                                            {/* Background circle */}
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="80"
                                                stroke="#e0e0e0"
                                                strokeWidth="10"
                                                fill="none"
                                            />
                                            {/* Progress circle */}
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="80"
                                                stroke="#28a745"
                                                strokeWidth="10"
                                                fill="none"
                                                strokeDasharray={this.getCircleCircumference()}
                                                strokeDashoffset={this.getProgressDashoffset()}
                                                transform="rotate(-90 100 100)"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="position-absolute top-50 start-50 translate-middle">
                                            <h1 className="timer-display">{this.formatTime(focusSession.timer)}</h1>
                                        </div>
                                    </div>
                                </div>

                                {/* Time Presets */}
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="btn-group">
                                        <button 
                                            className={`btn ${focusSession.timer === 25*60 ? 'btn-primary' : 'btn-outline-primary'}`}
                                            onClick={() => this.handlePresetSelection(25)}
                                        >
                                            25 min
                                        </button>
                                        <button 
                                            className={`btn ${focusSession.timer === 5*60 ? 'btn-primary' : 'btn-outline-primary'}`}
                                            onClick={() => this.handlePresetSelection(5)}
                                        >
                                            5 min
                                        </button>
                                        <button 
                                            className={`btn ${focusSession.timer === 15*60 ? 'btn-primary' : 'btn-outline-primary'}`}
                                            onClick={() => this.handlePresetSelection(15)}
                                        >
                                            15 min
                                        </button>
                                    </div>
                                </div>

                                {/* Custom Duration */}
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="input-group" style={{maxWidth: '200px'}}>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            min="1" 
                                            max="60" 
                                            placeholder="Custom" 
                                            value={this.state.customDuration}
                                            onChange={(e) => this.handleCustomDurationChange(e)}
                                        />
                                        <button className="btn btn-outline-secondary" onClick={() => this.applyCustomDuration()}>Set</button>
                                    </div>
                                </div>

                                {/* Todo Selection */}
                                <div className="mb-4">
                                    <label className="form-label">Select a Todo to focus on:</label>
                                    <select 
                                        className="form-select" 
                                        value={focusSession.currentTodoId || ''}
                                        onChange={(e) => this.props.actions.startFocusSession(parseInt(e.target.value, 10))}
                                    >
                                        <option value="">Choose a todo...</option>
                                        {this.props.data.list.map(todo => (
                                            <option key={todo.id} value={todo.id}>{todo.text}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Current Focused Todo */}
                                {currentTodo && (
                                    <div className="alert alert-info mb-4">
                                        <strong>Current Focus:</strong> {currentTodo.text}
                                    </div>
                                )}

                                {/* Control Buttons */}
                                <div className="d-flex justify-content-center">
                                    {!focusSession.isRunning && !focusSession.isPaused && (
                                        <button className="btn btn-success mx-2" onClick={() => focusSession.currentTodoId && startFocusSession(focusSession.currentTodoId)}>
                                            Start
                                        </button>
                                    )}
                                    {focusSession.isRunning && (
                                        <button className="btn btn-warning mx-2" onClick={() => pauseFocusSession()}>
                                            Pause
                                        </button>
                                    )}
                                    {focusSession.isPaused && (
                                        <button className="btn btn-success mx-2" onClick={() => focusSession.currentTodoId && startFocusSession(focusSession.currentTodoId)}>
                                            Resume
                                        </button>
                                    )}
                                    {(focusSession.isRunning || focusSession.isPaused) && (
                                        <button className="btn btn-danger mx-2" onClick={() => stopFocusSession()}>
                                            Stop
                                        </button>
                                    )}
                                    {focusSession.isRunning && (
                                        <button className="btn btn-primary mx-2" onClick={() => this.handleCompleteSession()}>
                                            Complete
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FocusTimer;