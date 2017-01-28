using System;
using System.Collections.Generic;

namespace AMSoft.IdentityServer.Configurator.Console_Menu
{
    public class CMenu<T, T1>:List<MenuEntry<T,T1>>
    {
        public MenuType Type { get; private set; }

        public CMenu(MenuType type, params MenuEntry<T, T1>[] entries)
        {
            this.AddRange(entries);
            Type = type;
            if ((Type == MenuType.UpperLetters || Type == MenuType.LowerLetters) && this.Count > 26)
                throw new ArgumentOutOfRangeException("If 'Letters' is chosen as the MenuType, the entries should be equal or less than 26!");
        }
        public CMenu(MenuType type)
        {
            Type = type;
            if ((Type == MenuType.UpperLetters || Type == MenuType.LowerLetters) && this.Count > 26)
                throw new ArgumentOutOfRangeException("If 'Letters' is chosen as the MenuType, the entries should be equal or less than 26!");
        }
        /// <summary>
        /// Returns a string with the menu printed on it
        /// </summary>
        /// <param name="SeparatorChar">This is the char which separates the Letter/Number from the description</param>
        /// <param name="FinalChar">This is the char which is always put at the end of each Entry description (I.E. the last char to be appended to the description of each entry)</param>
        /// <returns></returns>
        public string PrintMenu(char SeparatorChar = '.', char FinalChar = '\n')
        {
            string Menu = "";
            char Letter = Type == MenuType.LowerLetters ? 'a' : 'A';
            ushort Numbers = 1;
            foreach (MenuEntry<T, T1> ME in this)
            {
                switch (Type)
                {
                    case MenuType.LowerLetters:
                    case MenuType.UpperLetters:
                        Menu += string.Format("{0}{1} {2}{3}", Letter++, SeparatorChar, ME.Description, FinalChar);
                        break;
                    case MenuType.Numbers:
                        Menu += string.Format("{0}{1} {2}{3}", Numbers++, SeparatorChar, ME.Description, FinalChar);
                        break;
                }
            }
            return Menu;
        }

        /// <summary>
        /// Returns a string with the menu printed on it
        /// </summary>
        /// <param name="Separatorstring">This is the string which separates the Letter/Number from the description</param>
        /// <param name="Finalstring">This is the string which is always put at the end of each Entry description (I.E. the last string to be appended to the description of each entry)</param>
        /// <returns></returns>
        public string PrintMenu(string SeparatorString = ".", string FinalString = "\n")
        {
            string Menu = "";
            char Letter = Type == MenuType.LowerLetters ? 'a' : 'A';
            ushort Numbers = 1;
            foreach (MenuEntry<T, T1> ME in this)
            {
                switch (Type)
                {
                    case MenuType.LowerLetters:
                    case MenuType.UpperLetters:
                        Menu += string.Format("{0}{1} {2}{3}", Letter++, SeparatorString, ME.Description, FinalString);
                        break;
                    case MenuType.Numbers:
                        Menu += string.Format("{0}{1} {2}{3}", Numbers++, SeparatorString, ME.Description, FinalString);
                        break;
                }
            }
            return Menu;
        }
        /// <summary>
        /// This will execute an entry characterised by the letter given in input (the letter of the menu)
        /// It returns false if the index is out of range
        /// </summary>
        /// <param name="Letter">The correspondant letter of the menu</param>
        /// <param name="InputValue">The input value</param>
        public bool ExecuteEntry(char Letter, T InputValue, out T1 output)
        {
            output = default(T1);
            if (Type == MenuType.LowerLetters)
            {
                int Index = (int)Letter - 97;
                if (Index >= this.Count)
                {
                    return false;
                }
                output = this[Index].ExecuteEntry(InputValue);
            }
            else if (Type == MenuType.UpperLetters)
            {
                int Index = (int)Letter - 65;
                if (Index >= this.Count)
                {
                    return false;
                }
                output = this[Index].ExecuteEntry(InputValue);
            }
            return true;
        }
        /// <summary>
        /// This will execute the entry characterised by the menu index given
        /// It returns false if the index is out of range
        /// </summary>
        /// <param name="MenuIndex">Index of the entry in the menu</param>
        /// <param name="InputValue">The input value</param>
        public bool ExecuteEntry(int MenuIndex, T InputValue, out T1 output)
        {
            if (MenuIndex > this.Count)
            {
                output = default(T1);
                return false;
            }
            output = this[MenuIndex-1].ExecuteEntry(InputValue);
            return true;
        }
        /// <summary>
        /// This will execute an Entry based on its index in the Menuthis list. To be used only for debugging purposes.
        /// </summary>
        /// <remarks>This method is not intended to be normally used! Use <see cref="ExecuteEntry">ExecuteEntry</see> instead </remarks>
        /// <param name="ListIndex">The index of the Entry in the list</param>
        /// <param name="InputValue">The input value</param>
        public void ExecuteEntryWithListIndex(int ListIndex, T InputValue, out T1 output)
        {
            output = this[ListIndex].ExecuteEntry(InputValue);
        }
    }
}
