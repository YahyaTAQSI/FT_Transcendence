#/bin/bash

dotenv -e .env -- bash


# Wait for PostgreSQL to be ready
until pg_isready -h postgres -p 5432 -U "$POSTGRES_USER"; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

# Run Prisma migrations
npx --yes prisma migrate dev --name init

# Connect to the database and execute any additional commands (if needed)
PGPASSWORD="$POSTGRES_PASSWORD" psql -h postgres -U "$POSTGRES_USER" -d "$POSTGRES_DB" <<EOF
INSERT INTO "Item" (img , name , description , price , type , power , color)
VALUES ('$BACK_URL/pd/Aurora Blade.png', 'Aurora Blade', 'A luminous gold paddle exuding luxury and precision, perfect for elite players seeking top-tier performance.', 999, 'paddle', 'Power', 'yellow');
INSERT INTO "Item" (img , name , description , price , type , power , color)
VALUES ('$BACK_URL/pd/Crimson Reaper.png', 'Crimson Reaper', 'An intense red paddle embodying power and control, perfect for players with relentless determination and aggression.', 700, 'paddle', 'Power', 'red');
INSERT INTO "Item" (img , name , description , price , type , power , color)
VALUES ('$BACK_URL/pd/Neon Viper.png', 'Neon Viper', 'A vibrant green paddle known for its speed and accuracy, ideal for players who thrive on the edge.', 100, 'paddle', 'Power', 'green');
INSERT INTO "Item" (img , name , description , price , type , power , color)
VALUES ('$BACK_URL/pd/Cyber Siren.png', 'Cyber Siren', 'A captivating pink paddle designed for agility and finesse, blending elegance with deadly precision.', 50, 'paddle', 'Power', 'pink');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/bn/Azure Nexus.jpeg', 'Azure Nexus', 'A sleek table with glowing blue neon edges and a holographic net, set against a neon-lit cyberpunk cityscape.', 100, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/bn/Emerald Grid.jpeg', 'Emerald Grid', 'A vibrant table with green neon edges and a holographic net, perfect for a dynamic cyberpunk atmosphere.', 50, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/bn/Crimson Horizon.jpeg', 'Crimson Horizon', 'A striking table with red neon edges and a holographic net, set against a bold, dystopian cityscape.', 200, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/bn/defaultBanner.jpeg', 'Neon Core', 'A standard yet futuristic table with sleek lines and subtle neon accents, blending seamlessly into any cyberpunk setting. Perfect for all players, offering a balanced and visually appealing gameplay experience.', 0, 'banner', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Neon Wraith.png', 'Neon Wraith', 'A sleek, shadowy figure cloaked in green neon light. Neon Wraith combines stealth and agility with a futuristic edge, navigating the cyberpunk world with a ghostly presence.', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Emerald Specter.png', 'Emerald Specter', 'An imposing avatar bathed in vibrant green neon, adorned with high-tech armor and glowing circuit patterns. Emerald Specter exudes a commanding presence, blending strength and technology in the cyberpunk realm.', 20, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Cyber Phantom.png', 'Cyber Phantom', 'A dynamic, energy-infused avatar with intense green neon accents. Cyber Phantom moves with electrifying speed and precision, leaving a trail of neon as they dominate the cyberpunk landscape.', 30, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Shadow Enigma.png', 'Shadow Enigma', 'Cloaked in a sleek black mask with glowing green neon accents, Shadow Enigma exudes an air of mystery and stealth, perfect for navigating the neon-drenched streets of the cyberpunk world.', 100, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Toxic Vanguard.png', 'Toxic Vanguard', 'Encased in a high-tech hazmat suit with a green neon mask, Toxic Vanguard combines futuristic protection with cutting-edge technology, ready to face any challenge in the cyberpunk environment.', 200, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Radiant Sentinel.png', 'Radiant Sentinel', 'Dressed in a luminous hazmat suit and mask, Radiant Sentinel shines with intense green neon light. This avatar represents both resilience and advanced tech, standing firm in the midst of the cyberpunk chaos.', 300, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Neon Valkyrie.png', 'Neon Valkyrie', ' Dressed in sleek cyberpunk attire with radiant green neon highlights, Neon Valkyrie commands the court with both grace and power, embodying the spirit of a futuristic warrior.', 10, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Circuit Muse.png', 'Circuit Muse', 'With glowing circuit patterns and a stylish green neon visor, Circuit Muse blends artistic flair with advanced tech, making a striking impression in the cyberpunk landscape.', 20, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Glitch Diva.png', 'Glitch Diva', 'Sporting a bold green neon headband and glasses, Glitch Diva combines high-tech fashion with a charismatic presence, perfect for leading in both style and skill.', 30, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Spectra Sage.png', 'Spectra Sage', 'Wearing sleek glasses and a futuristic outfit bathed in green neon light, Spectra Sage merges intellectual prowess with elegance, dominating the game with strategic precision.', 100, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/Quantum Siren.png', 'Quantum Siren', 'Adorned in a dazzling outfit with neon accents, Quantum Siren radiates confidence and energy. Her high-tech accessories enhance her performance, making her a standout player in the cyberpunk realm.', 210, 'avatar', 'Power');
INSERT INTO "Item" (img , name , description , price , type , power)
VALUES ('$BACK_URL/av/default.png', 'default', 'default', 0, 'avatar', 'Power');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('First Win', 'Win your first match', '$BACK_URL/ach/first_win.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('First Defeat', 'You have faced your first defeat. Rise and fight again!', '$BACK_URL/ach/first_defeat.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('Flawless Victory', 'Win a single match without letting your opponent score a single point.', '$BACK_URL/ach/flawless.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('Marathon Match', 'You have shown true stamina by completing a match that lasted over 5 minutes.', '$BACK_URL/ach/Speed_Demon.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('Ping Pong Pro', 'Win 50 matches against tough opponents', '$BACK_URL/ach/ping_pong_pro.png');
INSERT INTO "Achievement" (name, description, uri)
VALUES ('AI Conqueror', 'Defeat the AI opponent on the highest difficulty level in a single match.', '$BACK_URL/ach/ai_conqueror.png');
EOF

npm run start:dev