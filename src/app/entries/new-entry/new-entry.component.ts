import { EntriesService } from './../entries.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry, EntryInput } from '../entry.model';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent {
  @Output()
  entryCreated = new EventEmitter<Entry>();

  entry: EntryInput = <EntryInput> {};

  constructor(
    private route: ActivatedRoute,
    private entriesService: EntriesService,
    private router: Router) { }

  createEntry(entry: EntryInput) {
    const uid = this.route.snapshot.params.uid;
    this.entriesService.addEntry(uid, new Entry(entry)).then(() => {
      return this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

}
