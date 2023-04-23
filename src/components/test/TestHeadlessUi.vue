<template>
  <div>
    <div>
      <Menu>
        <MenuButton>More</MenuButton>
        <MenuItems>
          <MenuItem v-slot="{ active }">
            <a :class='{ "bg-blue-500": active }' href="/account-settings">
              Account settings
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a :class='{ "bg-blue-500": active }' href="/account-settings">
              Documentation
            </a>
          </MenuItem>
          <MenuItem disabled>
            <span class="opacity-75">Invite a friend (coming soon!)</span>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>

    <div>
      <Listbox v-model="selectedPerson">
        <ListboxButton>{{ selectedPerson.name }}</ListboxButton>
        <ListboxOptions>
          <ListboxOption
            v-for="person in people"
            :key="person.id"
            :value="person"
            :disabled="person.unavailable"
          >
            {{ person.name }}
          </ListboxOption>
        </ListboxOptions>
      </Listbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]
const selectedPerson = ref(people[0])
</script>
