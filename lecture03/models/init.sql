CREATE TABLE games (
    Name TEXT NOT NULL,
    ID INTEGER PRIMARY KEY,
    Description TEXT,
    Awards TEXT,
    Link TEXT,
    MinPlayers INTEGER NOT NULL,
    MaxPlayers INTEGER,
    MinPlaytime INTEGER,
    MaxPlaytime INTEGER,
    MinAge INTEGER NOT NULL,
    MaxAge INTEGER
);
