import React from 'react'

const NotificationList = ({ filteredNotifications, markAsRead, getIconData }) => {
  return (
          <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-line bg-surface py-20 text-center">
            <Bell className="h-10 w-10 text-ink-faint mb-4" />
            <h3 className="text-lg font-semibold text-ink">No notifications</h3>
            <p className="mt-1 text-sm text-ink-soft">
              {activeTab === "unread" ? "You're all caught up!" : "You don't have any notifications yet."}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const { icon: Icon, color, bg } = getIconData(notification.type);
            const isUnread = !notification.read;

            return (
              <div 
                key={notification.id}
                className={`
                  group relative flex items-start gap-4 rounded-2xl border p-4 transition sm:items-center
                  ${isUnread 
                    ? "border-ink/15 bg-surface" 
                    : "border-ink-line bg-ink/[0.02] opacity-75 hover:opacity-100"}
                `}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bg} ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <h3 className={`text-sm font-semibold ${isUnread ? "text-ink" : "text-ink-soft"}`}>
                      {notification.title}
                    </h3>
                    <span className="shrink-0 text-xs text-ink-faint">{notification.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft line-clamp-2">
                    {notification.message}
                  </p>
                  
                  {isUnread && (
                    <button 
                      onClick={() => markAsRead(notification.id)}
                      className="mt-3 text-xs font-semibold text-ink hover:underline"
                    >
                      Mark as read
                    </button>
                  )}
                </div>

                {isUnread && (
                  <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-blue-600 sm:top-1/2 sm:-translate-y-1/2" />
                )}
              </div>
            );
          })
        )}
      </div>
  )
}

export default NotificationList;