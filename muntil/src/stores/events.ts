import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type APIResponse } from "../services/types";
import { API } from "../services";
import { AxiosError } from "axios";