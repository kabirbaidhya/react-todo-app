import React, {Component} from 'react';

class Analytics extends Component {
    // Calculate today's focus duration
    getTodayFocusDuration() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        return this.props.data.focusSession.focusHistory
            .filter(session => new Date(session.timestamp) >= today)
            .reduce((total, session) => total + session.duration, 0);
    }

    // Calculate weekly focus trend
    getWeeklyFocusTrend() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const weeklyData = Array(7).fill(0);
        
        this.props.data.focusSession.focusHistory.forEach(session => {
            const sessionDate = new Date(session.timestamp);
            const daysAgo = Math.floor((today - sessionDate) / (1000 * 60 * 60 * 24));
            
            if (daysAgo < 7) {
                weeklyData[6 - daysAgo] += session.duration;
            }
        });
        
        return daysOfWeek.map((day, index) => ({day, minutes: Math.round(weeklyData[index] / 60)}));
    }

    // Calculate completed tasks distribution
    getCompletedTasksDistribution() {
        const completedTasks = this.props.data.list.filter(todo => todo.completed);
        const totalTasks = this.props.data.list.length;
        const completedPercentage = totalTasks > 0 ? (completedTasks.length / totalTasks) * 100 : 0;
        
        return {
            completed: completedTasks.length,
            total: totalTasks,
            percentage: completedPercentage
        };
    }

    // Format duration from seconds to hours and minutes
    formatDuration(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else {
            return `${minutes}m`;
        }
    }

    render() {
        const todayFocus = this.getTodayFocusDuration();
        const weeklyTrend = this.getWeeklyFocusTrend();
        const taskDistribution = this.getCompletedTasksDistribution();
        
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h3 className="text-center">Productivity Analytics</h3>
                            </div>
                            <div className="card-body">
                                {/* Today's Focus */}
                                <div className="mb-5">
                                    <h4>Today's Focus</h4>
                                    <div className="alert alert-success">
                                        <h2 className="mb-0">{this.formatDuration(todayFocus)}</h2>
                                    </div>
                                </div>

                                {/* Weekly Focus Trend */}
                                <div className="mb-5">
                                    <h4>Weekly Focus Trend</h4>
                                    <div className="row">
                                        {weeklyTrend.map((dayData, index) => (
                                            <div key={index} className="col-12 mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <span>{dayData.day}</span>
                                                    <span>{dayData.minutes} min</span>
                                                </div>
                                                <div className="progress">
                                                    <div 
                                                        className="progress-bar" 
                                                        role="progressbar" 
                                                        style={{width: `${(dayData.minutes / Math.max(...weeklyTrend.map(d => d.minutes))) * 100}%`}}
                                                        aria-valuenow={dayData.minutes}
                                                        aria-valuemin="0"
                                                        aria-valuemax={Math.max(...weeklyTrend.map(d => d.minutes))}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Completed Tasks */}
                                <div>
                                    <h4>Completed Tasks</h4>
                                    <div className="alert alert-info">
                                        <h2 className="mb-0">{taskDistribution.completed} out of {taskDistribution.total} tasks</h2>
                                        <div className="progress mt-3" style={{height: '30px'}}>
                                            <div 
                                                className="progress-bar bg-success" 
                                                role="progressbar" 
                                                style={{width: `${taskDistribution.percentage}%`}}
                                                aria-valuenow={taskDistribution.percentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {taskDistribution.percentage.toFixed(1)}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Analytics;