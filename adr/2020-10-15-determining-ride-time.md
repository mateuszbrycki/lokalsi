# Determining ride time
When creating a ride, user should provide date and time in a timezone of a starting point.
The date and time will be stored as `LocalDateTime`. However, it will be adjusted to the timezone of the starting point. 