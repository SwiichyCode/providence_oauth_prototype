'use client';

import { InputForm } from '@/core/presentation/components/common/ui/input-form';
import { Label } from '@/core/presentation/components/common/ui/label';
import { TextAreaForm } from '@/core/presentation/components/common/ui/text-area-form';
import { RecruitmentFormValues } from '@/core/presentation/modules/recruitment/recruitment.schema';
import type { FormProps } from 'react-hook-form';

export default function RecruitmentFormContent({ form }: { form: FormProps<RecruitmentFormValues> }) {
  return (
    <div className="grid gap-8">
      <div className="grid gap-4">
        <div>
          <h3 className="text-base font-semibold">🧙 Informations de base</h3>
          <p className="text-muted-foreground text-sm">Faisons connaissance avec ton personnage principal.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <InputForm
              control={form.control}
              name="mainName"
              label="Nom du personnage principal"
              placeholder="Ex : Arthasdk, Illidan, Jeanmichelheal"
            />
          </div>
          <div className="grid gap-2">
            <InputForm
              control={form.control}
              name="realmFaction"
              label="Serveur et faction"
              placeholder="Ex : Hyjal - Horde"
            />
          </div>
          <div className="grid gap-2">
            <InputForm control={form.control} name="btag" label="BattleTag" placeholder="Ex : Pépito#1234" />
          </div>
          <div className="grid gap-2">
            <InputForm
              control={form.control}
              name="classSpec"
              label="Classe / Spécialisation principale"
              placeholder="Ex : Paladin Vindicte / Mage Feu"
            />
          </div>
          <div className="grid gap-2">
            <InputForm
              control={form.control}
              name="ilvl"
              label="Niveau d’équipement (ilvl actuel)"
              placeholder="Ex : 484 ilvl"
            />
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <TextAreaForm
              control={form.control}
              name="rerolls"
              label="Rerolls disponibles"
              placeholder="Liste rapide de tes rerolls jouables (classe / rôle / ilvl)"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <h3 className="text-base font-semibold">📜 Expérience en jeu</h3>
          <p className="text-muted-foreground text-sm">Dis-nous où tu en es dans ta progression.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <InputForm
            control={form.control}
            name="raidProgress"
            label="Progression raid actuelle"
            placeholder="Ex : 7/9H, quelques try sur Fyrakk, etc."
          />
          <InputForm
            control={form.control}
            name="pastExp"
            label="Expérience sur les précédentes extensions"
            placeholder="Ex : Shadowlands 10/10H, Dragonflight 9/9N…"
          />
          <InputForm
            control={form.control}
            name="highestKey"
            label="Clé mythique la plus haute complétée en temps cette saison"
            placeholder="Ex : +18 Sombreflore, +20 Atal'Dazar…"
          />
          <InputForm
            control={form.control}
            name="links"
            label="Lien(s) Raider.IO / Warcraft Logs / Armory"
            placeholder="Colle ici tes liens utiles !"
          />
          <TextAreaForm
            control={form.control}
            name="oldGuilds"
            label="Anciennes guildes et raisons du départ"
            placeholder="Sois honnête, pas besoin d’un roman 😄"
            className="min-h-24 sm:col-span-2"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <h3 className="text-base font-semibold">💡 Ce que tu recherches</h3>
          <p className="text-muted-foreground text-sm">Qu’attends-tu d’une guilde, et qu’espères-tu y apporter ?</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <InputForm
            control={form.control}
            name="goals"
            label="Tes objectifs dans le jeu"
            placeholder="Ex : Clean HM, push M+, jouer entre potes, etc."
          />
          <InputForm
            control={form.control}
            name="expectations"
            label="Ce que tu attends d’une guilde"
            placeholder="Ex : Bonne ambiance, entraide, stabilité, etc."
          />
          <InputForm
            control={form.control}
            name="contribution"
            label="Ce que tu peux apporter à la guilde"
            placeholder="Ex : Bon DPS, humeur positive, strat Excel, memes…"
            className="sm:col-span-2"
          />
        </div>
      </div>
      {/* 🕒 Disponibilités */}
      <div className="grid gap-4">
        <div>
          <h3 className="text-base font-semibold">🕒 Disponibilités</h3>
          <p className="text-muted-foreground text-sm">Indique tes jours et heures où tu es dispo pour raid ou M+.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <InputForm
            control={form.control}
            name="availability"
            label="Jours et horaires disponibles"
            placeholder="Ex : Lundi / Mercredi / Dimanche de 20h à 23h"
            className="sm:col-span-2"
          />
          <InputForm
            control={form.control}
            name="regularity"
            label="Régularité de présence"
            placeholder="Ex : Toujours dispo / Sauf IRL / En fonction du RNG de la vie 😄"
            className="sm:col-span-2"
          />
        </div>
      </div>

      {/* 🎧 Communication */}
      <div className="grid gap-4">
        <div>
          <h3 className="text-base font-semibold">🎧 Communication</h3>
          <p className="text-muted-foreground text-sm">On joue mieux quand on se comprend !</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <InputForm control={form.control} name="hasDiscord" label="As-tu Discord ?" placeholder="Oui / Non" />
          <InputForm
            control={form.control}
            name="hasMic"
            label="As-tu un micro fonctionnel ?"
            placeholder="Oui / Non / “Je suis muet IRL”"
          />
          <InputForm
            control={form.control}
            name="languages"
            label="Langue(s) parlée(s)"
            placeholder="Ex : Français, Anglais, Troll commun…"
          />
          <InputForm
            control={form.control}
            name="commsStyle"
            label="Ton style de communication"
            placeholder="Ex : Discret et focus / Bavard et social / Mix des deux"
          />
        </div>
      </div>

      {/* ❤️ La touche finale */}
      <div className="grid gap-4">
        <div>
          <h3 className="text-base font-semibold">❤️ La touche finale</h3>
          <p className="text-muted-foreground text-sm">On aime connaître le joueur derrière le personnage.</p>
        </div>
        <div className="grid gap-4">
          <TextAreaForm
            control={form.control}
            name="about"
            label="Présente-toi rapidement"
            placeholder="Âge, expérience, hobbies, depuis quand tu joues à WoW, ton style de jeu…"
            className="min-h-28"
          />
          <InputForm
            control={form.control}
            name="finalWord"
            label="Un mot pour finir"
            placeholder="Une blague, un cri de guerre, une promesse de DPS ou juste un mot gentil 😄"
          />
        </div>
      </div>

      {/* 🔗 Annexes & Validation */}
      <div className="grid gap-4">
        <div>
          <h3 className="text-base font-semibold">🔗 Annexes & Validation</h3>
          <p className="text-muted-foreground text-sm">Quelques infos pratiques avant d’envoyer ta candidature.</p>
        </div>
        <div className="grid gap-4">
          <TextAreaForm
            control={form.control}
            name="annexes"
            label="Liens annexes (logs, vidéos, screenshots, etc.)"
            placeholder="Colle ici tout ce que tu veux nous montrer"
            className="min-h-24"
          />
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <input id="charterAccepted" name="charterAccepted" type="checkbox" className="accent-primary h-4 w-4" />
              <Label htmlFor="charterAccepted">As-tu lu et accepté la charte de guilde ?</Label>
            </div>
            <div className="flex items-center gap-2">
              <input id="rgpdConsent" name="rgpdConsent" type="checkbox" className="accent-primary h-4 w-4" />
              <Label htmlFor="rgpdConsent">
                Consentement RGPD — J’autorise la guilde à stocker mes infos pour le recrutement.
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
