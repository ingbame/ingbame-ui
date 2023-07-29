import { Routes } from "@angular/router";

export const LayoutRoutes: Routes = [
  {
    path: "home",
    loadChildren: () => import("../../home/home.module").then(m => m.HomeModule)
  },
  {
    path: "jobs",
    loadChildren: () => import("../../jobs/jobs.module").then(m => m.JobsModule)
  },
  {
    path: "projects",
    loadChildren: () => import("../../projects/projects.module").then(m => m.ProjectsModule)
  }
];
